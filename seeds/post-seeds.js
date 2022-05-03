const { Post } = require('../models');

const postdata = [
  {
    title: 'Perfect Dad Shoes',
   post_text: 'Great for mowing the lawn and yardwork.  Dad jokes a must.',
   post_url:'https://www.dsw.com/en/us/product/new-balance-608-v5-training-shoe---mens/432275?activeColor=115',
   user_id: 7
  },
  {
    title: 'Great Walkability',
   post_text: 'Perfect everyday shoes. Great quality and color; true to size.',
   post_url:'https://www.vans.com/en-us/shoes-c00081/old-skool-pvn000d3hy28',
    user_id: 9
  },
  {
    title: 'Colorful but not functional.',
   post_text: 'Unique design and great quality.  Wish it had a zipper.',
   post_url:'https://www.landsend.com/products/mens-heritage-fleece-snap-neck-pullover-top/id_358691?attributes=43307,43326,44255,44827,44967,50436',
   user_id: 8
  },
  {
    title: 'Perfect shorts for summer',
   post_text: 'Very comfortable and light weight. Look great on.  Will buy in another color.',
   post_url:'https://www.gap.com/browse/product.do?pid=811942022&vid=1?&tid=gppl000051&kwid=1&ap=7&gclid=Cj0KCQjwpcOTBhCZARIsAEAYLuVisLV21lmKBuDgF3D2rDCf75SrGL6ObvU94wPEi3d872yDXSzJBfMaAthHEALw_wcB&gclsrc=aw.ds',
   user_id: 1
  },
  {
    title: 'Not a great fit for kids',
   post_text: 'Too short and the snap closure is difficult.  Will return.',
   post_url:'https://oldnavy.gap.com/browse/product.do?pid=825549002&cid=1187739&pcid=1187738&vid=1#pdp-page-content',
   user_id: 4
  },
  {
    title: 'Professional and comfortable staple pant.',
   post_text: 'Ideal for in-the-office workdays. Length works with boots or loafers. Great deal!',
   post_url:'https://www.kohls.com/product/prd-4549881/womens-nine-west-slim-ankle-pants.jsp?color=Black&prdPV=15',
   user_id: 4
  },
  {
    title: "Vintage jean jacket from Levi's secondhand",
   post_text: 'USA Trucker Jacket. This one no longer available obviously; but highly recommend https://secondhand.levi.com',
   post_url:'https://www.secondhand.levi.com/p/levi-made-in-the-usa-trucker-jacket/Y0MUSATJ?color=medium-wash&aqi=d8e0be5223ca08fb409a6c3547f906d9',
   user_id: 1
  },
  {
    title: 'Great fitting fleec hoodie.',
    post_text: 'Gender neutral; bought for my daughter and she loves.  Great fit.',
    post_url:'https://www.ae.com/us/en/p/men/hoodies-sweatshirts/pullover-hoodies/ae-bonfire-fleece-california-graphic-hoodie/0193_1854_648?menu=cat4840004',
    user_id: 1
  },
  {
    title: 'Because why not?',
    post_text: 'Graphic art tech tracksuit. Fits great and garners attention if you are into that.',
    post_url:'https://www.nike.com/t/sportswear-tech-fleece-mens-full-zip-hoodie-wjXxjJ/DM6456-072',
    user_id: 9
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
