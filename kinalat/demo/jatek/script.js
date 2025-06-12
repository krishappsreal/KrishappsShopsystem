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
