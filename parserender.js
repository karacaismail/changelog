// Changelog Parser and Renderer
function changelogApp() {
    return {
        // Data properties
        loading: true,
        error: null,
        rawMarkdown: '',
        versions: [],
        filteredVersions: [],
        
        // Filter properties
        searchQuery: '',
        stateFilter: '',
        changeTypeFilter: '',
        
        // Initialize the app
        async init() {
            await this.loadChangelog();
            this.setupWatchers();
        },
        
        // Load changelog from markdown file
        async loadChangelog() {
            try {
                this.loading = true;
                this.error = null;
                
                // Fetch the changelog.md file
                // Note: This can be easily modified to fetch from GitLab or other sources
                const response = await fetch('https://raw.githubusercontent.com/karacaismail/changelog/main/changelog.md' );
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                this.rawMarkdown = await response.text();
                this.parseMarkdown();
                this.filterVersions();
                
            } catch (error) {
                console.error('Error loading changelog:', error);
                this.error = 'Changelog dosyası yüklenirken bir hata oluştu: ' + error.message;
            } finally {
                this.loading = false;
            }
        },
        
        // Parse markdown content into structured data
        parseMarkdown() {
            const lines = this.rawMarkdown.split('\n');
            const versions = [];
            let currentVersion = null;
            let currentChangeType = null;
            
            for (let i = 0; i < lines.length; i++) {
                const line = lines[i].trim();
                
                // Skip empty lines and main title
                if (!line || line.startsWith('# Changelog') || line.startsWith('Tüm önemli')) {
                    continue;
                }
                
                // Parse version headers (## [version] - codename - date)
                const versionMatch = line.match(/^##\s*\[([^\]]+)\](?:\s*-\s*([^-]+?))?(?:\s*-\s*(.+))?$/);
                if (versionMatch) {
                    // Save previous version if exists
                    if (currentVersion) {
                        versions.push(currentVersion);
                    }
                    
                    const version = versionMatch[1];
                    const codename = versionMatch[2] ? versionMatch[2].trim() : '';
                    const date = versionMatch[3] ? versionMatch[3].trim() : '';
                    
                    currentVersion = {
                        version: version,
                        codename: codename,
                        date: date,
                        state: this.detectVersionState(version),
                        changes: {
                            added: [],
                            changed: [],
                            deprecated: [],
                            removed: [],
                            fixed: [],
                            security: []
                        }
                    };
                    currentChangeType = null;
                    continue;
                }
                
                // Parse change type headers (### Added, ### Changed, etc.)
                const changeTypeMatch = line.match(/^###\s+(.+)$/);
                if (changeTypeMatch && currentVersion) {
                    const changeType = changeTypeMatch[1].toLowerCase();
                    currentChangeType = this.mapChangeType(changeType);
                    continue;
                }
                
                // Parse change items (- item)
                const changeItemMatch = line.match(/^-\s+(.+)$/);
                if (changeItemMatch && currentVersion && currentChangeType) {
                    const changeText = changeItemMatch[1];
                    if (currentVersion.changes[currentChangeType]) {
                        currentVersion.changes[currentChangeType].push(changeText);
                    }
                    continue;
                }
            }
            
            // Add the last version
            if (currentVersion) {
                versions.push(currentVersion);
            }
            
            this.versions = versions;
        },
        
        // Detect version state based on version string
        detectVersionState(version) {
            const v = version.toLowerCase();
            
            if (v.includes('alpha')) return 'alpha';
            if (v.includes('beta')) return 'beta';
            if (v.includes('rc') || v.includes('release candidate')) return 'rc';
            if (v.includes('pre')) return 'pre-alpha';
            if (v.includes('deprecated')) return 'deprecated';
            
            // Default to stable for regular version numbers
            return 'stable';
        },
        
        // Map change type strings to internal keys
        mapChangeType(changeType) {
            const mapping = {
                'added': 'added',
                'eklenen': 'added',
                'eklenenler': 'added',
                'changed': 'changed',
                'değişen': 'changed',
                'değişenler': 'changed',
                'deprecated': 'deprecated',
                'kullanımdan kaldırılan': 'deprecated',
                'kullanımdan kaldırılanlar': 'deprecated',
                'removed': 'removed',
                'kaldırılan': 'removed',
                'kaldırılanlar': 'removed',
                'fixed': 'fixed',
                'düzeltilen': 'fixed',
                'düzeltilenler': 'fixed',
                'security': 'security',
                'güvenlik': 'security'
            };
            
            return mapping[changeType] || 'changed';
        },
        
        // Setup watchers for reactive filtering
        setupWatchers() {
            this.$watch('searchQuery', () => this.filterVersions());
            this.$watch('stateFilter', () => this.filterVersions());
            this.$watch('changeTypeFilter', () => this.filterVersions());
        },
        
        // Filter versions based on search and filter criteria
        filterVersions() {
            let filtered = [...this.versions];
            
            // Apply search filter
            if (this.searchQuery) {
                const query = this.searchQuery.toLowerCase();
                filtered = filtered.filter(version => {
                    // Search in version, codename, and changes
                    const searchText = [
                        version.version,
                        version.codename,
                        version.date,
                        ...Object.values(version.changes).flat()
                    ].join(' ').toLowerCase();
                    
                    return searchText.includes(query);
                });
            }
            
            // Apply state filter
            if (this.stateFilter) {
                filtered = filtered.filter(version => version.state === this.stateFilter);
            }
            
            // Apply change type filter
            if (this.changeTypeFilter) {
                filtered = filtered.filter(version => {
                    return version.changes[this.changeTypeFilter] && 
                           version.changes[this.changeTypeFilter].length > 0;
                });
            }
            
            this.filteredVersions = filtered;
        },
        
        // Clear all filters
        clearFilters() {
            this.searchQuery = '';
            this.stateFilter = '';
            this.changeTypeFilter = '';
        },
        
        // Get state badge text
        getStateBadge(state) {
            const badges = {
                'pre-alpha': 'Pre-Alpha',
                'alpha': 'Alpha',
                'beta': 'Beta',
                'rc': 'Release Candidate',
                'stable': 'Stable',
                'deprecated': 'Deprecated'
            };
            return badges[state] || 'Unknown';
        },
        
        // Get state CSS class
        getStateClass(state) {
            return `state-${state}`;
        },
        
        // Get change type label
        getChangeTypeLabel(type) {
            const labels = {
                'added': 'Eklenenler',
                'changed': 'Değişenler',
                'deprecated': 'Kullanımdan Kaldırılanlar',
                'removed': 'Kaldırılanlar',
                'fixed': 'Düzeltilenler',
                'security': 'Güvenlik'
            };
            return labels[type] || type.charAt(0).toUpperCase() + type.slice(1);
        },
        
        // Get change type CSS class
        getChangeTypeClass(type) {
            return `change-${type}`;
        },
        
        // Refresh changelog data
        async refresh() {
            await this.loadChangelog();
        }
    };
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Additional initialization if needed
    console.log('Changelog system initialized');
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { changelogApp };
}

