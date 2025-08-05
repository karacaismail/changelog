# Changelog Yönetim Sistemi

Bu proje, yazılım geliştirme ekipleri için modern ve kullanıcı dostu bir changelog yönetim sistemi sağlar. Sistem, Markdown formatındaki changelog dosyalarını otomatik olarak parse ederek görsel bir arayüzde sunar.

## 🚀 Özellikler

- **Otomatik Markdown Parse**: `changelog.md` dosyasını otomatik olarak işler
- **Gelişmiş Arama**: Sürüm, değişiklik ve açıklamalarda arama yapabilme
- **Akıllı Filtreleme**: Sürüm durumu ve değişiklik türüne göre filtreleme
- **Responsive Tasarım**: Maksimum 960px genişlik ile mobil uyumlu
- **Renk Kodlaması**: Farklı sürüm durumları için farklı renkler
- **Modern UI**: Flowbite ve Tailwind CSS ile şık tasarım
- **Erişilebilirlik**: WCAG standartlarına uygun

## 📁 Dosya Yapısı

```
changelog-system/
├── changelog.html          # Ana görselleştirme sayfası
├── parserender.js          # Markdown parser ve render motoru
├── changelog.md            # Örnek changelog dosyası
├── changelog-template.md   # Yazılımcılar için template
└── README.md              # Bu dosya
```

## 🎨 Sürüm Durumu Renkleri

| Durum | Renk | Bileşen |
|-------|------|---------|
| Pre-Alpha | Kırmızı | Alert |
| Alpha | Turuncu | Badge |
| Beta | Sarı | Badge |
| Release Candidate | Mavi | Badge |
| Stable | Yeşil | Badge |
| Deprecated | Gri | Badge |

## 🔧 Kurulum ve Kullanım

### 1. Dosyaları İndirin
```bash
# Proje dosyalarını kopyalayın
cp -r changelog-system/ /your/project/path/
```

### 2. HTTP Server Başlatın
```bash
cd changelog-system
python3 -m http.server 8080
```

### 3. Tarayıcıda Açın
```
http://localhost:8080/changelog.html
```

## 📝 Changelog Yazım Kuralları

### Sürüm Formatı
```markdown
## [X.Y.Z] - Kod Adı - YYYY-MM-DD
```

### Desteklenen Değişiklik Türleri
- **Added**: Yeni özellikler
- **Changed**: Mevcut özelliklerde değişiklikler
- **Deprecated**: Kullanımdan kaldırılacak özellikler
- **Removed**: Kaldırılan özellikler
- **Fixed**: Hata düzeltmeleri
- **Security**: Güvenlik değişiklikleri

### Örnek Giriş
```markdown
## [2.3.0] - Phoenix Rising - 2025-08-05

### Added
- Kullanıcı arayüzüne çoklu dil desteği eklendi
- Yeni dashboard widget'ları geliştirildi

### Fixed
- Mobil cihazlarda login sorunu düzeltildi

### Security
- JWT token güvenliği artırıldı
```

## 🔄 GitLab Entegrasyonu

`parserender.js` dosyasındaki fetch URL'ini değiştirerek GitLab'dan changelog çekebilirsiniz:

```javascript
// Mevcut (yerel dosya)
const response = await fetch('./changelog.md');

// GitLab entegrasyonu için
const response = await fetch('https://gitlab.com/your-project/raw/main/CHANGELOG.md');
```

## 🛠️ Teknoloji Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **CSS Framework**: Tailwind CSS
- **UI Components**: Flowbite
- **JavaScript Framework**: Alpine.js
- **Markdown Parser**: Marked.js
- **Responsive**: Mobile-first design

## 📱 Responsive Tasarım

- **Maksimum Genişlik**: 960px
- **Mobil Uyumlu**: Tüm ekran boyutlarında çalışır
- **Touch Friendly**: Mobil cihazlarda kolay kullanım

## 🎯 Kullanım Senaryoları

### Ekip İçi İletişim
- Sprint sonrası değişiklikleri paylaşma
- Geliştirici ekibi arasında bilgi aktarımı
- QA ekibi için test notları

### Yatırımcı Sunumları
- Ürün gelişim sürecini gösterme
- Milestone'ları vurgulama
- İlerleme raporları

### CI/CD Entegrasyonu
- Otomatik sürüm etiketleme
- Release notları oluşturma
- Pipeline tetikleme

## 🔍 Arama ve Filtreleme

### Arama Özellikleri
- Sürüm numaralarında arama
- Kod adlarında arama
- Değişiklik açıklamalarında arama
- Tarih bazlı arama

### Filtreleme Seçenekleri
- Sürüm durumuna göre filtreleme
- Değişiklik türüne göre filtreleme
- Kombine filtreler

## 🚀 Gelişmiş Özellikler

### Otomatik Yenileme
```javascript
// 30 saniyede bir otomatik yenileme
setInterval(() => {
    changelogApp.refresh();
}, 30000);
```

### Özel Tema Desteği
CSS değişkenleri ile kolay tema özelleştirmesi mümkündür.

### API Entegrasyonu
REST API'ler ile changelog verilerini dinamik olarak çekebilirsiniz.

## 📊 Performans

- **Hızlı Yükleme**: Minimal JavaScript ve CSS
- **Lazy Loading**: Büyük changelog'lar için optimize edilmiş
- **Caching**: Browser cache desteği

## 🔒 Güvenlik

- **XSS Koruması**: Markdown içeriği güvenli şekilde render edilir
- **CORS Desteği**: Cross-origin istekler için yapılandırılabilir
- **Content Security Policy**: CSP başlıkları desteklenir

## 🤝 Katkıda Bulunma

1. Projeyi fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🆘 Destek

Sorularınız için:
- GitHub Issues kullanın
- Ekip lideri ile iletişime geçin
- Dokümantasyonu inceleyin

## 🔄 Sürüm Geçmişi

Bu projenin kendi changelog'u `changelog.md` dosyasında tutulmaktadır.

