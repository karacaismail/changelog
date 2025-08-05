# Changelog

Tüm önemli değişiklikler bu dosyada belgelenecektir.

Bu format [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) standardına dayanmaktadır ve [Semantic Versioning](https://semver.org/spec/v2.0.0.html) kullanmaktadır.

## [Unreleased]

### Added
- Yeni özellikler burada listelenir

### Changed
- Mevcut işlevsellikte yapılan değişiklikler

### Deprecated
- Yakında kaldırılacak özellikler

### Removed
- Bu sürümde kaldırılan özellikler

### Fixed
- Düzeltilen hatalar

### Security
- Güvenlik açısından önemli değişiklikler

---

## Sürüm Formatı

Yeni sürüm eklerken aşağıdaki formatı kullanın:

```markdown
## [X.Y.Z] - Kod Adı - YYYY-MM-DD

### Added
- Eklenen yeni özellik açıklaması

### Changed
- Değiştirilen mevcut özellik açıklaması

### Deprecated
- Kullanımdan kaldırılacak özellik açıklaması

### Removed
- Kaldırılan özellik açıklaması

### Fixed
- Düzeltilen hata açıklaması

### Security
- Güvenlik ile ilgili değişiklik açıklaması
```

---

## Sürüm Numaralandırma Kuralları (SemVer)

- **MAJOR (X.0.0)**: Geriye dönük uyumluluğu bozan değişiklikler
- **MINOR (0.Y.0)**: Geriye dönük uyumlu yeni özellikler
- **PATCH (0.0.Z)**: Geriye dönük uyumlu hata düzeltmeleri

### Ön-sürüm Etiketleri
- **Alpha**: `X.Y.Z-alpha.N` (örn: 2.1.0-alpha.1)
- **Beta**: `X.Y.Z-beta.N` (örn: 2.1.0-beta.2)
- **Release Candidate**: `X.Y.Z-rc.N` (örn: 2.1.0-rc.1)

---

## Değişiklik Türleri

### Added (Eklenenler)
Yeni özellikler için kullanılır.
- Yeni API endpoint'leri
- Yeni kullanıcı arayüzü bileşenleri
- Yeni konfigürasyon seçenekleri

### Changed (Değişenler)
Mevcut işlevsellikte yapılan değişiklikler için kullanılır.
- API response formatı değişiklikleri
- UI/UX iyileştirmeleri
- Performans optimizasyonları

### Deprecated (Kullanımdan Kaldırılanlar)
Yakında kaldırılacak özellikler için kullanılır.
- Eski API endpoint'leri
- Kullanımdan kaldırılacak konfigürasyonlar
- Desteklenmeyen özellikler

### Removed (Kaldırılanlar)
Bu sürümde tamamen kaldırılan özellikler için kullanılır.
- Kaldırılan API endpoint'leri
- Artık desteklenmeyen özellikler
- Temizlenen kod parçaları

### Fixed (Düzeltilenler)
Hata düzeltmeleri için kullanılır.
- Bug fix'ler
- Performans sorunları
- Güvenlik açıkları (kritik olmayanlar)

### Security (Güvenlik)
Güvenlik ile ilgili değişiklikler için kullanılır.
- Güvenlik açığı düzeltmeleri
- Güvenlik iyileştirmeleri
- Yetkilendirme değişiklikleri

---

## Yazım Kuralları

1. **Başlıklar**: Her sürüm için `## [X.Y.Z] - Kod Adı - YYYY-MM-DD` formatını kullanın
2. **Kod Adı**: İsteğe bağlı, sürümün temasını yansıtan yaratıcı bir isim
3. **Tarih**: ISO 8601 formatında (YYYY-MM-DD)
4. **Madde İmleri**: Her değişiklik için `-` kullanın
5. **Açıklama**: Net, anlaşılır ve kullanıcı odaklı yazın
6. **Dil**: Türkçe kullanın, teknik terimler için İngilizce kabul edilir

---

## Örnek Sürüm Girişi

```markdown
## [2.3.0] - Phoenix Rising - 2025-08-05

### Added
- Kullanıcı arayüzüne çoklu dil desteği eklendi
- Yeni dashboard widget'ları geliştirildi
- API rate limiting sistemi eklendi

### Changed
- Ana sayfa tasarımı yenilendi
- API response formatları optimize edildi

### Fixed
- Mobil cihazlarda login sorunu düzeltildi
- Safari tarayıcısında CSS render hatası giderildi

### Security
- JWT token güvenliği artırıldı
```

---

## Meta-veri Alanları (İsteğe Bağlı)

Sürüm başlığının altına ek meta-veri ekleyebilirsiniz:

```markdown
## [2.3.0] - Phoenix Rising - 2025-08-05

**Proje**: Proje Adı  
**Yazarlar**: Ekip A, Ekip B  
**Durum**: Stable  
**Derleme**: #1234  

### Added
...
```

---

## CI/CD Entegrasyonu Notları

- Bu dosya GitLab/Jenkins pipeline'ları tarafından otomatik olarak işlenebilir
- Sürüm etiketleri otomatik olarak Git tag'lerine dönüştürülebilir
- Release notları otomatik olarak oluşturulabilir
- Dosya yolu değiştirilerek GitLab'dan çekilebilir

---

## Yardım ve Destek

Changelog yazımı hakkında sorularınız için:
- [Keep a Changelog](https://keepachangelog.com/) rehberini inceleyin
- [Semantic Versioning](https://semver.org/) kurallarını öğrenin
- Ekip lideri ile iletişime geçin

