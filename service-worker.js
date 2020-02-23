const staticBailaBollywood = "baila-site"
const assets = [
  
  "index.html",
  "html/dashboard.html",
  "html/login.html",
  "html/recover-password.html",
  "html/register.html",
  "html/my-playlist.html",
  "css/all.min.css",
  "css/fontawesome.min.css",
  "css/index.css",
  "css/login-register.css",
  "css/responsive-breakpoints.css",
  "css/navbar.css",
  "css/styles.css",
  "css/swiper.min.css",
  "scripts/all.min.js",
  "scripts/fontawesome.min.js",
  "scripts/redirect-to-forgot-pass.js",
  "scripts/spanish-to-english-translate.js",
  "scripts/sticky-navbar.js",
  "scripts/swiper.min.js",
  "scripts/show-comments.js",
  "images/chand-sifarish.png",
  "images/dance-indian.png",
  "images/dil-hi-toh-hai.png",
  "images/duji-vaari-pyaar.png",
  "images/dummy-image.png",
  "images/heartless.png",
  "images/founder-sir.png",
  "images/header-image-1.png",
  "images/jaan-nisar.png",
  "images/kadar.png",
  "images/kalank.png",
  "images/loader.gif",
  "images/loader.mp4",
  "images/khairiyat.png",
  "images/khamoshiyan.png",
  "images/kuch-dino-se.png",
  "images/la-musica.jpeg",
  "images/logo_white.png",
  "images/baila-bollywood-icon.png",
  "images/mann-bharya.png",
  "images/medium-article.jpeg",
  "images/namaste-bollywood-medium.jpeg",
  "images/navbar-toggler-icon.png",
  "images/painting-1.jpg",
  "images/painting-2.jpg",
  "images/painting-5.jpg",
  "images/painting-4.jpg",
  "images/red-forest-bg.jpg",
  "images/sapna-jahan.png",
  "images/section-background.jpg",
  "images/Spanish-bolo-natraj-transparent.png",
  "images/spanish-bolo.png",
  "images/spanish-man.gif",
  "images/tu-haqeqat.png",
  "images/tu-har-lamha.png",
  "images/video-frame-img.jpeg",
  "images/zehnaseeb.png",
  "images/zero.png",
  "images/baila-bollywood-icon.png",
  "images/baila-bollywood-transparent.png",
  "images/dashboard-frame-image.jpg",

]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticBailaBollywood).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })