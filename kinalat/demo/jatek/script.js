        document.addEventListener('DOMContentLoaded', function() {
            const products = [
                {
                    image: 'https://img.kwcdn.com/product/open/f513ec54c4a94176ae4404959a9bb597-goods.jpeg?imageView2/2/w/800/q/70/format/webp',
                    brand: 'Krishapps',
                    name: 'The Night 100ml',
                    type: 'Eau de Parfum',
                    price: '45,990 Ft'
                },
                {
                    image: 'https://img.kwcdn.com/product/fancy/41e583f2-4813-4e7e-baf1-17df360d3bbf.jpg?imageView2/2/w/800/q/70/format/webp',
                    brand: 'Krishapps',
                    name: 'Reality 50ml',
                    type: 'Extrait De Parfum',
                    price: '99,990 Ft'
                },
                {
                    image: 'https://img.kwcdn.com/product/fancy/2de80411-5368-479d-a4c0-33c245eaff40.jpg?imageView2/2/w/800/q/70/format/webp',
                    brand: 'Krishapps',
                    name: 'Be Cool 50ml',
                    type: 'Parfüm',
                    price: '38,500 Ft'
                },
                {
                    image: 'https://img.ltwebstatic.com/images3_spmp/2024/07/15/cd/17210287142fa837baed62cc97ef355d7136b60522_thumbnail_900x.webp',
                    brand: 'Krishapps & Louis Vuitton',
                    name: 'Summer Potion 50ml',
                    type: 'Eau de Parfum',
                    price: '65,860 Ft'
                },
                {
                    image: 'https://img.ltwebstatic.com/images3_spmp/2024/10/16/29/1729071098bc6aa8e3dc5285678735406c1e5bbe20_thumbnail_900x.webp',
                    brand: 'Krishapps & Maison Francis Kurkdijan',
                    name: 'Winterbomb 50ml',
                    type: 'Parfüm kivonat',
                    price: '78,990 Ft'
                },
                {
                    image: 'https://img.ltwebstatic.com/v4/j/spmp/2025/04/24/f8/1745476142079854b601e80e7f67f4f98562d90a5f_thumbnail_900x.webp',
                    brand: 'választható márka',
                    name: 'A te minid - Választható parfümminták 10ml',
                    type: 'Válaszd ki, hogy melyik parfümünkből szeretnél 10ml-t, és mi megcsináljuk neked!',
                    price: 'változó ár'
                },
                {
                    image: 'https://fimgs.net/photogram/p1200/cr/r8/eeW3r8DBhhTroMHO.jpg',
                    brand: 'Móntale',
                    name: 'Soleil De Capri 100ml',
                    type: 'Eau de Parfum',
                    price: '53,450 Ft'
                },
                {
                    image: 'https://fimgs.net/photogram/p1200/2x/oz/MtSU1hy1HHkHZcGM.jpg',
                    brand: 'Jean Paul Gaultier',
                    name: 'Le Male Elixir 125ml',
                    type: 'Parfüm kivonat',
                    price: '48,450 Ft'
                },
                {
                    image: 'https://fimgs.net/photogram/p1200/fy/nd/j8xP7vFQayc8pt5S.jpg',
                    brand: 'Chanel',
                    name: 'Allure Homme Sport 100ml',
                    type: 'Eau de Toilette',
                    price: '94,550 Ft'
                },
                {
                    image: 'https://fimgs.net/photogram/p1200/ze/ub/LO2Jy5kkeuiGDbbt.jpg',
                    brand: 'Jean Paul Gaultier',
                    name: '... Paradise Garden 75ml',
                    type: 'Eau de Parfum',
                    price: '42,670 Ft'
                },
                {
                    image: 'https://fimgs.net/photogram/p1200/xx/s9/YnQP5EgllXWjn99w.jpg',
                    brand: 'Yves Saint Laurent',
                    name: 'MYSLF 75ml',
                    type: 'Eau de Parfum',
                    price: '29,990 Ft'
                },
                {
                    image: 'https://fimgs.net/mdimg/secundar/o.131683.jpg',
                    brand: 'Yves Saint Laurent',
                    name: 'Y Le Parfum 2025 60ml',
                    type: 'Parfüm',
                    price: '52,800 Ft'
                },
                {
                    image: 'https://fimgs.net/photogram/p1200/ho/hv/MnM6yKILr3hg5Rkg.jpg',
                    brand: 'Dior',
                    name: 'Sauvage 100ml',
                    type: 'Eau de Parfum',
                    price: '37,500 Ft'
                },
                {
                    image: 'https://fimgs.net/photogram/p1200/pd/pz/1Xs2W7IDaRIobaAP.jpg',
                    brand: 'Dior',
                    name: 'Homme Intense 50ml',
                    type: 'Eau de Parfum Intense',
                    price: '43,900 Ft'
                },
                {
                    image: 'https://fimgs.net/photogram/p1200/4z/k5/1a0fubcsWmL2FPL5.jpg',
                    brand: 'Gisada',
                    name: 'Ambassador 100ml',
                    type: 'Eau de Parfum',
                    price: '49,990 Ft'
                },
                {
                    image: 'https://fimgs.net/photogram/p1200/6j/bx/08oM6sna0Lq9emwZ.jpg',
                    brand: 'Guerlain',
                    name: 'LˇHomme Ideál Extreme 100ml',
                    type: 'Eau de Parfum',
                    price: '39,800 Ft'
                },
                {
                    image: 'https://fimgs.net/photogram/p1200/zb/ki/RIMwPwzptbxtltfj.jpg',
                    brand: 'Prada',
                    name: 'LˇHomme 100ml',
                    type: 'Eau de Toilette',
                    price: '36,400 Ft'
                },
                {
                    image: 'https://fimgs.net/photogram/p1200/3s/eb/vb2KZFs6wKSQG5Kx.jpg',
                    brand: 'Tom Ford',
                    name: 'Costa Azzura 10ml (MINI)',
                    type: 'Eau de Parfum',
                    price: '16,600 Ft'
                }

            ];
            
            const productsContainer = document.getElementById('products');
            
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <div class="product-info">
                        <div class="product-brand">${product.brand}</div>
                        <div class="product-name">${product.name}</div>
                        <div class="product-type">${product.type}</div>
                        <div class="product-price">${product.price}</div>
                    </div>
                `;
                
                productsContainer.appendChild(productCard);
            });
        });
