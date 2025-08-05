# Yazılım Sürüm Türleri ve Yaşam Döngüsü

Yazılım geliştirme sürecinde, yazılımın farklı aşamalarını ve olgunluk seviyelerini belirtmek için çeşitli sürüm türleri ve bir yaşam döngüsü kullanılır. Bu, hem geliştiriciler hem de kullanıcılar için yazılımın durumu hakkında net bir iletişim sağlar.

## Yazılım Sürüm Türleri (Versioning Schemes)

Yazılım sürümlerini numaralandırmak için farklı şemalar mevcuttur. En yaygın olanları şunlardır:

### 1. Semantik Sürümleme (Semantic Versioning - SemVer)

SemVer, `MAJOR.MINOR.PATCH` formatında üç parçalı bir sürüm numarası kullanır. Bu format, sürümdeki değişikliklerin türünü ve etkisini belirtir:

*   **MAJOR (Ana Sürüm):** Geriye dönük uyumluluğu bozan büyük değişiklikler yapıldığında artırılır. Örneğin, API'de önemli değişiklikler.
*   **MINOR (İkincil Sürüm):** Geriye dönük uyumluluğu bozmayan yeni özellikler eklendiğinde artırılır. Örneğin, yeni bir fonksiyon eklenmesi.
*   **PATCH (Yama Sürümü):** Geriye dönük uyumluluğu bozmayan hata düzeltmeleri yapıldığında artırılır. Örneğin, küçük bir bug'ın giderilmesi.

SemVer ayrıca isteğe bağlı olarak `pre-release` (ön-sürüm) etiketleri (örn. `-alpha`, `-beta`, `-rc`) ve `build metadata` (derleme meta verisi) içerebilir. `0.y.z` formatı genellikle ilk geliştirme aşamasındaki yazılımlar için kullanılır ve herhangi bir değişiklik geriye dönük uyumluluğu bozabilir.

### 2. Tarih Bazlı Sürümleme (Date-Based Versioning - CalVer)

Bu şema, sürüm numaralarını bir tarih formatına göre belirler (örn. `YYYY.MM.DD` veya `YY.MM`). Özellikle düzenli ve sık güncellemeler alan projelerde tercih edilir. Örneğin, Ubuntu işletim sistemi `YY.MM` formatını kullanır.

### 3. Sıralı Sürümleme (Sequential Versioning)

Basitçe artan sayılarla sürümleme yapılır (örn. 1, 2, 3...). Değişikliklerin anlamı sürüm numarasından doğrudan anlaşılamaz, genellikle harici belgelere ihtiyaç duyar.

### 4. Alfanümerik Sürümleme (Alphanumeric Versioning)

Sayılar ve harflerin bir kombinasyonunu kullanır. Örneğin, `1.0a`, `1.0b`, `1.0rc1`, `1.0`. Bu tür sürümleme genellikle geliştirme aşamalarını belirtmek için kullanılır.

## Yazılım Sürüm Yaşam Döngüsü (Software Release Life Cycle)

Yazılımın geliştirilmesinden son kullanıcıya ulaşmasına kadar geçen süreç çeşitli aşamalardan oluşur. Başlıca aşamalar şunlardır:

### 1. Ön-Alfa (Pre-alpha)

Yazılım projesinin resmi testlerden önceki tüm faaliyetlerini kapsar. Bu aşamada gereksinim analizi, yazılım tasarımı, geliştirme ve birim testleri gibi çalışmalar yapılır. Genellikle kararsızdır ve dahili kullanıma yöneliktir.

### 2. Alfa (Alpha)

Resmi testlerin ilk aşamasıdır. Geliştiriciler genellikle yazılımı dahili olarak test ederler (white-box testleri). Bu aşamada yazılımda ciddi hatalar olabilir ve tüm özellikler henüz tamamlanmamış olabilir. Alfa sürümü genellikle özellik tamamlama (feature-complete) ile sona erer, yani planlanan tüm özellikler eklenmiş ancak hatalar ve performans sorunları devam etmektedir.

### 3. Beta (Beta)

Alfa aşamasını takip eden geliştirme aşamasıdır. Yazılım genellikle özellik olarak tamamlanmıştır ancak hala bilinen veya bilinmeyen hatalar içerebilir. Beta testleri, yazılımın daha geniş bir kullanıcı grubu (genellikle kuruluş dışından) tarafından test edildiği aşamadır. Amaç, kullanıcılar üzerindeki olumsuz etkileri azaltmak ve kullanılabilirlik testleri yapmaktır. Beta sürümleri `açık beta` (herkese açık) veya `kapalı beta` (davetle sınırlı) olabilir.

### 4. Sürüm Adayı (Release Candidate - RC)

Beta sürümünün potansiyel olarak kararlı bir ürün olmaya aday olduğu aşamadır. Önemli bir hata ortaya çıkmadığı sürece yayınlanmaya hazırdır. Bu aşamada tüm özellikler tasarlanmış, kodlanmış ve bir veya daha fazla beta döngüsü boyunca test edilmiştir. Yeni özellik eklenmez, sadece hata düzeltmeleri yapılır.

### 5. Kararlı Sürüm (Stable Release / General Availability - GA / Gold)

Yazılımın tüm testleri başarıyla geçtiği, kararlı ve güvenilir olduğu kabul edilen son sürümüdür. Bu sürüm genel kullanıma sunulur. Ticari yazılımlar için genellikle `Release to Manufacturing (RTM)` veya `General Availability (GA)` olarak adlandırılır.

## Changelog Yönetimi

Changelog (değişiklik günlüğü), yazılımın her sürümünde yapılan tüm önemli değişiklikleri kronolojik sırayla listeleyen bir dosyadır. İyi bir changelog, kullanıcıların ve geliştiricilerin bir sürümden diğerine neyin değiştiğini hızlıca anlamalarına yardımcı olur. Temel prensipleri şunlardır:

*   **İnsanlar için olmalı:** Makine tarafından okunmaktan çok, insanlar tarafından kolayca anlaşılabilir olmalıdır.
*   **Her sürüm için bir giriş:** Her yeni sürüm için ayrı bir bölüm olmalıdır.
*   **Değişiklik türlerine göre gruplama:** `Added` (eklenenler), `Changed` (değişenler), `Deprecated` (kullanımdan kaldırılanlar), `Removed` (kaldırılanlar), `Fixed` (düzeltilenler), `Security` (güvenlik) gibi kategoriler altında gruplanmalıdır.
*   **Net ve özlü:** Her madde, yapılan değişikliği açıkça ve kısa bir şekilde açıklamalıdır.

Changelog'lar genellikle projenin kök dizininde `CHANGELOG.md` veya `CHANGES.md` gibi bir Markdown dosyası olarak tutulur. Bu format, hem okunabilirliği artırır hem de kolayca parse edilebilir olmasını sağlar.

Bu bilgiler, projenizin sürüm yönetimi ve changelog oluşturma süreçleri için bir temel oluşturacaktır.




### Ek Changelog Kategorileri

Kullanıcının isteği üzerine, changelog'lara ek olarak aşağıdaki kategoriler de dahil edilecektir:

*   **Security (Güvenlik):** Güvenlikle ilgili yapılan tüm değişiklikler ve düzeltmeler.
*   **Deprecated (Kullanımdan Kaldırılanlar):** Artık kullanılmaması gereken özellikler veya API'ler.
*   **Removed (Kaldırılanlar):** Tamamen kaldırılan özellikler veya API'ler.

### Sürüm Adlandırma (Version Naming) - Kod Adları/Temalar

Standart SemVer sürüm numaralarına ek olarak, projelere özel bir "kod adı" veya "sürüm teması" eklenebilir. Bu, özellikle pazarlama ve ekip içi motivasyon açısından faydalı olabilir. Örneğin:

*   `2.3.0 - 


"Phoenix Rising"`

Bu tür adlandırmalar, sürümün içeriği hakkında ek bir bağlam sağlayabilir ve iletişimi zenginleştirebilir.





## Changelog Meta-verisi

Changelog dosyasına, sürümle ilgili ek bilgileri içerecek meta-veri alanları eklenecektir. Bu meta-veriler, changelog'un daha zengin ve programatik olarak işlenebilir olmasını sağlayacaktır. Örnek meta-veri alanları şunları içerebilir:

*   **`version`**: Sürüm numarası (örn. `2.3.0`)
*   **`release_date`**: Sürümün yayınlanma tarihi (örn. `2025-08-05`)
*   **`codename`**: Sürümün kod adı veya teması (örn. `Phoenix Rising`)
*   **`project`**: İlgili proje adı (örn. `Proje A`)
*   **`authors`**: Sürümde katkısı olan yazarlar/ekipler (örn. `[Ekip X, Ekip Y]`)
*   **`status`**: Sürümün durumu (örn. `Stable`, `Beta`, `RC`)

Bu meta-veriler, changelog'un otomatik olarak işlenmesi ve farklı platformlarda görselleştirilmesi için kullanılabilir.





## Sürüm Durumları İçin Görselleştirme Önerileri

Kullanıcının isteği üzerine, farklı sürüm durumları (state) için görselleştirme amacıyla renkler ve bileşenler belirlenmiştir. Bu, changelog arayüzünde sürümlerin mevcut durumunu hızlıca anlamayı sağlayacaktır:

*   **Pre-alpha:** `Kırmızı` renkli `Alert` bileşeni. Yüksek derecede kararsızlık ve erken geliştirme aşamasını vurgular.
*   **Alpha:** `Turuncu` renkli `Badge` bileşeni. Hala kararsız ancak bazı temel özelliklerin mevcut olduğunu belirtir.
*   **Beta:** `Sarı` renkli `Badge` bileşeni. Özelliklerin tamamlandığını ancak hata düzeltmelerinin devam ettiğini gösterir.
*   **Release Candidate (RC):** `Mavi` renkli `Badge` bileşeni. Üretime yakın, son testlerin yapıldığı aşamayı ifade eder.
*   **Stable (Kararlı):** `Yeşil` renkli `Badge` bileşeni. Üretime hazır, kararlı ve güvenilir sürümü temsil eder.

Bu renk ve bileşen seçimleri, kullanıcı deneyimini artırarak changelog'un daha anlaşılır ve estetik olmasını sağlayacaktır.





## Detaylı Yazılım Sürüm Türleri ve ABD Mühendislik Terminolojisi

`pasted_content.txt` dosyasında sağlanan detaylı bilgilere göre, yazılım geliştirme sürecinde kullanılan sürüm türleri ve bunlara karşılık gelen ABD mühendislik terminolojisi aşağıdaki gibidir:

### Yazılım Sürüm Türleri Tablosu

| Sürüm Adı             | Kısaltma | Amaç / Durum                                   | Dağıtım           | Hedef Kitle           | Stabilite | Açıklama Kriterleri                               |
| :-------------------- | :------- | :--------------------------------------------- | :---------------- | :-------------------- | :-------- | :------------------------------------------------ |
| **Development**       | `dev`    | Aktif geliştirme süreci                        | Dahili (local)    | Geliştiriciler        | Düşük     | Özellikler değişebilir, test kapsamı sınırlıdır.  |
| **Nightly**           | -        | Günlük derleme (otomatik)                      | Dahili/public     | Geliştirici/Testçi    | Çok Düşük | Otomasyonla çıkan sürümler, hata ayıklama amaçlı. |
| **Alpha**             | `α`      | İlk dış testler, temel işlevler tamamlandı     | Kısıtlı (closed)  | İç test grubu         | Düşük     | Yeni özellikler ekleniyor, çok hata olabilir.     |
| **Beta**              | `β`      | Kararsız test sürümü, kullanıcı geri bildirimi | Genelde açık      | Gelişmiş kullanıcılar | Orta      | Ana işlevler tamam, ama bug olabilir.             |
| **Release Candidate** | `RC`     | Yayına hazır sürüm adayı                       | Seçimli veya açık | QA / Son kullanıcılar | Yüksek    | Hatalar temizlenmiş, yayına hazırlanıyor.         |
| **Stable / Final**    | `stable` | Kararlı, yayına alınmış sürüm                  | Genel erişim      | Tüm kullanıcılar      | Yüksek    | Yayınlanmış, destekleniyor.                       |
| **Long Term Support** | `LTS`    | Uzun süreli destek sürümü                      | Genel erişim      | Kurumsal kullanıcılar | Yüksek    | Belirli süre boyunca güncelleme garantisi.        |
| **Hotfix / Patch**    | `x.x.x`  | Kritik hata düzeltmeleri                       | Genel erişim      | Tüm kullanıcılar      | Yüksek    | Küçük sürüm artışı (örn. 2.1.4 → 2.1.5).          |
| **Preview / Canary**  | -        | Gelecekteki sürümün ilk ön izlemesi            | Genelde açık      | Meraklı kullanıcılar  | Değişken  | Gelecekteki özellikler denenir.                   |
| **Snapshot**          | -        | O anki durumun dondurulmuş hali                | Genelde dahili    | Geliştirici           | Değişken  | Genellikle versiyon kontrol sistemine bağlı.      |
| **Pre-Release**       | `pre`    | RC ile Beta arası, bazen etiketlenmiş          | Seçimli veya açık | QA ve geliştiriciler  | Orta      | Spesifik testler için ayırılmış.                  |
| **Rolling Release**   | -        | Sürekli güncellenen sürüm                      | Sürekli dağıtım   | Tüm kullanıcılar      | Değişken  | Versiyon yok, güncellemeler süreklidir.           |
| **Deprecated**        | -        | Kullanımı önerilmeyen, destek dışı             | Erişilebilir      | Geliştiriciler        | Kırılgan  | Yerine yeni sürüm çıkmış, kullanılmamalı.         |

### ABD Mühendislik Terminolojisi

| Türkçe Adı                  | İngilizce Terim         | Yaygın Kısaltma / Kullanım Örneği     | Not / Kullanım Biçimi                                  |
| :-------------------------- | :---------------------- | :------------------------------------ | :----------------------------------------------------- |
| Geliştirme                  | Development build       | `dev`                                 | Genellikle `main` veya `develop` branch’te çalışılır   |
| Gece Derlemesi              | Nightly build           | `nightly-20250804`                    | CI pipeline otomasyonu, genelde pre-merge test içindir |
| Alpha                       | Alpha release           | `v2.0.0-alpha.1`                      | İlk test amaçlı sürüm, çok kararsız                    |
| Beta                        | Beta release            | `v2.0.0-beta.3`                       | Daha geniş kullanıcı testleri için                     |
| Sürüm Adayı                 | Release Candidate       | `v2.0.0-rc.1`                         | Production'a geçmeden son test sürümü                  |
| Kararlı Sürüm               | Stable release          | `v2.0.0`                              | Yayına alınmış, production ortamına deploy edilir      |
| Uzun Süreli Destek          | Long-Term Support (LTS) | `v2.0.0 (LTS)`                        | Genellikle 18-36 ay destek garantisi vardır            |
| Hızlı Yama / Düzeltme       | Patch / Hotfix          | `v2.0.1` veya `hotfix/critical-issue` | Genellikle `main` üzerinden doğrudan patch             |
| Ön İzleme Sürümü            | Preview / Early Access  | `preview`, `insider`, `early-access`  | Microsoft, Google gibi firmalarda sık görülür          |
| Snapshot                    | Snapshot                | `snapshot-20250804`                   | Maven/Gradle gibi araçlarda geçici sürüm               |
| Pre-Release                 | Pre-release             | `pre-release` flag (GitHub)           | Yayınlanmış ama `latest` değil, genelde test için      |
| Sürekli Güncellenen Sürüm   | Rolling release         | `rolling` (örneğin Arch Linux)        | Versiyon yok, sürekli güncellenir                      |
| Destek Dışı / Modası Geçmiş | Deprecated              | `deprecated`                          | API/sürüm kullanılmamalı, desteklenmez                 |

### Önerilen Changelog Yönetim Çözümü

Kullanıcının ihtiyaçları ve sağlanan `pasted_content.txt` dosyasındaki analizler doğrultusunda, aşağıdaki kombine yapı changelog yönetimi için en uygun çözüm olarak belirlenmiştir:

1.  **`CHANGELOG.md`**: İnsanlar için okunabilir bir arşiv olarak kullanılacaktır. Bu dosya, geliştiriciler tarafından manuel olarak güncellenecek ve sürüm kontrol sisteminde tutulacaktır.
2.  **`changelog.json` (veya benzeri makine odaklı bir format)**: CI/CD pipeline için entegre bir veri kaynağı olarak işlev görecektir. Bu dosya, `CHANGELOG.md`'den otomatik olarak türetilebilir veya ayrı olarak yönetilebilir. Kullanıcının isteği üzerine `parserender.js` bu dosyayı işleyecektir.
3.  **Git tag + GitLab Release page**: Otomatik HTML changelog oluşturma ve sürüm iletişimi için kullanılacaktır. Jenkins ve GitLab entegrasyonu ile bu süreç otomatize edilebilir.

Bu çözüm, hem insan okunabilirliğini hem de makine okunabilirliğini bir araya getirerek, ekip içi iletişimi, yatırımcı bilgilendirmesini ve CI/CD otomasyonunu destekleyecektir.


