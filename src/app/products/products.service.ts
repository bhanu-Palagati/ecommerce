import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {
  products = [
    {
      id: 1,
      name: 'Galaxy S10 Plus',
      brand: 'Samsung',
      price: 73990,
      imgUrl: '../../assets/images/s10plus.jpg',
      description: `The Samsung Galaxy S10 Plus is the best smartphone available right now, still.It's a big phone that's designed for big hands - and it takes the very best of what's on the smartphone market and puts it together in a compelling package that we've loved testing.
      Screen: The Super AMOLED 6.4-inch display has been measured as the very best around, with super colours, great dynamic range and, essentially, the very best viewing experience you can have on a mobile phone. 

      Plus, there's a fingerprint scanner embedded in the display.
      
      Battery life: The battery life on the Galaxy S10 Plus is and improvement over the S9 Plus, thanks to the larger 4,100mAh battery inside. It'll easily reach bedtime with double digits still left in the tank.
      
      The S10 Plus also offers Samsung's new Wireless PowerShare, allowing you to wirelessly charge other devices on the rear of the handset.
      
      Camera: The trio of cameras on the Galaxy S10 Plus are among the best on the market, building on the excellent setup on the S9 series by offering more features, shooting modes and overall clarity. 
      Mini verdict: The Galaxy S10 Plus is packed full of the best Samsung has to offer, and it comes together to give you the best smartphone`
    },
    {
      id: 2,
      name: 'P30 Pro',
      brand: 'Huawei ',
      price: 71990,
      imgUrl: '../../assets/images/p30pro.jpg',
      description: `The Samsung Galaxy S10 Plus is the best smartphone available right now, still.It's a big phone that's designed for big hands - and it takes the very best of what's on the smartphone market and puts it together in a compelling package that we've loved testing.
      Screen: The Super AMOLED 6.4-inch display has been measured as the very best around, with super colours, great dynamic range and, essentially, the very best viewing experience you can have on a mobile phone. 

      Plus, there's a fingerprint scanner embedded in the display.
      
      Battery life: The battery life on the Galaxy S10 Plus is and improvement over the S9 Plus, thanks to the larger 4,100mAh battery inside. It'll easily reach bedtime with double digits still left in the tank.
      
      The S10 Plus also offers Samsung's new Wireless PowerShare, allowing you to wirelessly charge other devices on the rear of the handset.
      
      Camera: The trio of cameras on the Galaxy S10 Plus are among the best on the market, building on the excellent setup on the S9 series by offering more features, shooting modes and overall clarity. 
      Mini verdict: The Galaxy S10 Plus is packed full of the best Samsung has to offer, and it comes together to give you the best smartphone`
    },
    {
      id: 3,
      name: 'Galaxy S10',
      brand: 'Samsung',
      price: 50990,
      imgUrl: '../../assets/images/s10.jpg',
      description: `The Samsung Galaxy S10 Plus is the best smartphone available right now, still.It's a big phone that's designed for big hands - and it takes the very best of what's on the smartphone market and puts it together in a compelling package that we've loved testing.
      Screen: The Super AMOLED 6.4-inch display has been measured as the very best around, with super colours, great dynamic range and, essentially, the very best viewing experience you can have on a mobile phone. 

      Plus, there's a fingerprint scanner embedded in the display.
      
      Battery life: The battery life on the Galaxy S10 Plus is and improvement over the S9 Plus, thanks to the larger 4,100mAh battery inside. It'll easily reach bedtime with double digits still left in the tank.
      
      The S10 Plus also offers Samsung's new Wireless PowerShare, allowing you to wirelessly charge other devices on the rear of the handset.
      
      Camera: The trio of cameras on the Galaxy S10 Plus are among the best on the market, building on the excellent setup on the S9 series by offering more features, shooting modes and overall clarity. 
      Mini verdict: The Galaxy S10 Plus is packed full of the best Samsung has to offer, and it comes together to give you the best smartphone`
    },
    {
      id: 4,
      name: 'Mate 20 Pro',
      brand: 'Huawei',
      price: 45999,
      imgUrl: '../../assets/images/mate20.jpg',
      description: `The Samsung Galaxy S10 Plus is the best smartphone available right now, still.It's a big phone that's designed for big hands - and it takes the very best of what's on the smartphone market and puts it together in a compelling package that we've loved testing.
      Screen: The Super AMOLED 6.4-inch display has been measured as the very best around, with super colours, great dynamic range and, essentially, the very best viewing experience you can have on a mobile phone. 

      Plus, there's a fingerprint scanner embedded in the display.
      
      Battery life: The battery life on the Galaxy S10 Plus is and improvement over the S9 Plus, thanks to the larger 4,100mAh battery inside. It'll easily reach bedtime with double digits still left in the tank.
      
      The S10 Plus also offers Samsung's new Wireless PowerShare, allowing you to wirelessly charge other devices on the rear of the handset.
      
      Camera: The trio of cameras on the Galaxy S10 Plus are among the best on the market, building on the excellent setup on the S9 series by offering more features, shooting modes and overall clarity. 
      Mini verdict: The Galaxy S10 Plus is packed full of the best Samsung has to offer, and it comes together to give you the best smartphone`
    },
    {
      id: 5,
      name: 'Galaxy Note 9',
      brand: 'Samsung',
      price: 67990,
      imgUrl: '../../assets/images/note9.jpg',
      description: `The Samsung Galaxy S10 Plus is the best smartphone available right now, still.It's a big phone that's designed for big hands - and it takes the very best of what's on the smartphone market and puts it together in a compelling package that we've loved testing.
      Screen: The Super AMOLED 6.4-inch display has been measured as the very best around, with super colours, great dynamic range and, essentially, the very best viewing experience you can have on a mobile phone. 

      Plus, there's a fingerprint scanner embedded in the display.
      
      Battery life: The battery life on the Galaxy S10 Plus is and improvement over the S9 Plus, thanks to the larger 4,100mAh battery inside. It'll easily reach bedtime with double digits still left in the tank.
      
      The S10 Plus also offers Samsung's new Wireless PowerShare, allowing you to wirelessly charge other devices on the rear of the handset.
      
      Camera: The trio of cameras on the Galaxy S10 Plus are among the best on the market, building on the excellent setup on the S9 series by offering more features, shooting modes and overall clarity. 
      Mini verdict: The Galaxy S10 Plus is packed full of the best Samsung has to offer, and it comes together to give you the best smartphone`
    },
    {
      id: 6,
      name: 'XS',
      brand: 'iPhone',
      price: 114890,
      imgUrl: '../../assets/images/xs.jpg',
      description: `The Samsung Galaxy S10 Plus is the best smartphone available right now, still.It's a big phone that's designed for big hands - and it takes the very best of what's on the smartphone market and puts it together in a compelling package that we've loved testing.
      Screen: The Super AMOLED 6.4-inch display has been measured as the very best around, with super colours, great dynamic range and, essentially, the very best viewing experience you can have on a mobile phone. 

      Plus, there's a fingerprint scanner embedded in the display.
      
      Battery life: The battery life on the Galaxy S10 Plus is and improvement over the S9 Plus, thanks to the larger 4,100mAh battery inside. It'll easily reach bedtime with double digits still left in the tank.
      
      The S10 Plus also offers Samsung's new Wireless PowerShare, allowing you to wirelessly charge other devices on the rear of the handset.
      
      Camera: The trio of cameras on the Galaxy S10 Plus are among the best on the market, building on the excellent setup on the S9 series by offering more features, shooting modes and overall clarity. 
      Mini verdict: The Galaxy S10 Plus is packed full of the best Samsung has to offer, and it comes together to give you the best smartphone`
    },
    {
      id: 7,
      name: 'P30',
      brand: 'Huawei ',
      price: 38990,
      imgUrl: '../../assets/images/p30.jpg',
      description: `The Samsung Galaxy S10 Plus is the best smartphone available right now, still.It's a big phone that's designed for big hands - and it takes the very best of what's on the smartphone market and puts it together in a compelling package that we've loved testing.
      Screen: The Super AMOLED 6.4-inch display has been measured as the very best around, with super colours, great dynamic range and, essentially, the very best viewing experience you can have on a mobile phone. 

      Plus, there's a fingerprint scanner embedded in the display.
      
      Battery life: The battery life on the Galaxy S10 Plus is and improvement over the S9 Plus, thanks to the larger 4,100mAh battery inside. It'll easily reach bedtime with double digits still left in the tank.
      
      The S10 Plus also offers Samsung's new Wireless PowerShare, allowing you to wirelessly charge other devices on the rear of the handset.
      
      Camera: The trio of cameras on the Galaxy S10 Plus are among the best on the market, building on the excellent setup on the S9 series by offering more features, shooting modes and overall clarity. 
      Mini verdict: The Galaxy S10 Plus is packed full of the best Samsung has to offer, and it comes together to give you the best smartphone`
    },
    {
      id: 8,
      name: '7 Pro',
      brand: 'OnePlus',
      price: 52999,
      imgUrl: '../../assets/images/7pro.jpg',
      description: `The Samsung Galaxy S10 Plus is the best smartphone available right now, still.It's a big phone that's designed for big hands - and it takes the very best of what's on the smartphone market and puts it together in a compelling package that we've loved testing.
      Screen: The Super AMOLED 6.4-inch display has been measured as the very best around, with super colours, great dynamic range and, essentially, the very best viewing experience you can have on a mobile phone. 

      Plus, there's a fingerprint scanner embedded in the display.
      
      Battery life: The battery life on the Galaxy S10 Plus is and improvement over the S9 Plus, thanks to the larger 4,100mAh battery inside. It'll easily reach bedtime with double digits still left in the tank.
      
      The S10 Plus also offers Samsung's new Wireless PowerShare, allowing you to wirelessly charge other devices on the rear of the handset.
      
      Camera: The trio of cameras on the Galaxy S10 Plus are among the best on the market, building on the excellent setup on the S9 series by offering more features, shooting modes and overall clarity. 
      Mini verdict: The Galaxy S10 Plus is packed full of the best Samsung has to offer, and it comes together to give you the best smartphone`
    },
    {
      id: 9,
      name: 'Pixel 3 XL',
      brand: 'Google ',
      price: 58490,
      imgUrl: '../../assets/images/3xl.jpg',
      description: `The Samsung Galaxy S10 Plus is the best smartphone available right now, still.It's a big phone that's designed for big hands - and it takes the very best of what's on the smartphone market and puts it together in a compelling package that we've loved testing.
      Screen: The Super AMOLED 6.4-inch display has been measured as the very best around, with super colours, great dynamic range and, essentially, the very best viewing experience you can have on a mobile phone. 

      Plus, there's a fingerprint scanner embedded in the display.
      
      Battery life: The battery life on the Galaxy S10 Plus is and improvement over the S9 Plus, thanks to the larger 4,100mAh battery inside. It'll easily reach bedtime with double digits still left in the tank.
      
      The S10 Plus also offers Samsung's new Wireless PowerShare, allowing you to wirelessly charge other devices on the rear of the handset.
      
      Camera: The trio of cameras on the Galaxy S10 Plus are among the best on the market, building on the excellent setup on the S9 series by offering more features, shooting modes and overall clarity. 
      Mini verdict: The Galaxy S10 Plus is packed full of the best Samsung has to offer, and it comes together to give you the best smartphone`
    },
    {
      id: 10,
      name: 'Galaxy S10e',
      brand: 'Samsung ',
      price: 50900,
      imgUrl: '../../assets/images/s10e.jpg',
      description: `The Samsung Galaxy S10 Plus is the best smartphone available right now, still.It's a big phone that's designed for big hands - and it takes the very best of what's on the smartphone market and puts it together in a compelling package that we've loved testing.
      Screen: The Super AMOLED 6.4-inch display has been measured as the very best around, with super colours, great dynamic range and, essentially, the very best viewing experience you can have on a mobile phone. 

      Plus, there's a fingerprint scanner embedded in the display.
      
      Battery life: The battery life on the Galaxy S10 Plus is and improvement over the S9 Plus, thanks to the larger 4,100mAh battery inside. It'll easily reach bedtime with double digits still left in the tank.
      
      The S10 Plus also offers Samsung's new Wireless PowerShare, allowing you to wirelessly charge other devices on the rear of the handset.
      
      Camera: The trio of cameras on the Galaxy S10 Plus are among the best on the market, building on the excellent setup on the S9 series by offering more features, shooting modes and overall clarity. 
      Mini verdict: The Galaxy S10 Plus is packed full of the best Samsung has to offer, and it comes together to give you the best smartphone`
    },
    {
      id: 11,
      name: 'View 20',
      brand: 'Honor ',
      price: 35999,
      imgUrl: '../../assets/images/view20.jpg',
      description: `The Samsung Galaxy S10 Plus is the best smartphone available right now, still.It's a big phone that's designed for big hands - and it takes the very best of what's on the smartphone market and puts it together in a compelling package that we've loved testing.
      Screen: The Super AMOLED 6.4-inch display has been measured as the very best around, with super colours, great dynamic range and, essentially, the very best viewing experience you can have on a mobile phone. 

      Plus, there's a fingerprint scanner embedded in the display.
      
      Battery life: The battery life on the Galaxy S10 Plus is and improvement over the S9 Plus, thanks to the larger 4,100mAh battery inside. It'll easily reach bedtime with double digits still left in the tank.
      
      The S10 Plus also offers Samsung's new Wireless PowerShare, allowing you to wirelessly charge other devices on the rear of the handset.
      
      Camera: The trio of cameras on the Galaxy S10 Plus are among the best on the market, building on the excellent setup on the S9 series by offering more features, shooting modes and overall clarity. 
      Mini verdict: The Galaxy S10 Plus is packed full of the best Samsung has to offer, and it comes together to give you the best smartphone`
    },
    {
      id: 12,
      name: 'XS Max',
      brand: 'iPhone',
      price: 109890,
      imgUrl: '../../assets/images/xsmax.jpg',
      description: `The Samsung Galaxy S10 Plus is the best smartphone available right now, still.It's a big phone that's designed for big hands - and it takes the very best of what's on the smartphone market and puts it together in a compelling package that we've loved testing.
      Screen: The Super AMOLED 6.4-inch display has been measured as the very best around, with super colours, great dynamic range and, essentially, the very best viewing experience you can have on a mobile phone. 

      Plus, there's a fingerprint scanner embedded in the display.
      
      Battery life: The battery life on the Galaxy S10 Plus is and improvement over the S9 Plus, thanks to the larger 4,100mAh battery inside. It'll easily reach bedtime with double digits still left in the tank.
      
      The S10 Plus also offers Samsung's new Wireless PowerShare, allowing you to wirelessly charge other devices on the rear of the handset.
      
      Camera: The trio of cameras on the Galaxy S10 Plus are among the best on the market, building on the excellent setup on the S9 series by offering more features, shooting modes and overall clarity. 
      Mini verdict: The Galaxy S10 Plus is packed full of the best Samsung has to offer, and it comes together to give you the best smartphone`
    },
    {
      id: 13,
      name: '6T',
      brand: 'OnePlus ',
      price: 28990,
      imgUrl: '../../assets/images/6t.jpg',
      description: `The Samsung Galaxy S10 Plus is the best smartphone available right now, still.It's a big phone that's designed for big hands - and it takes the very best of what's on the smartphone market and puts it together in a compelling package that we've loved testing.
      Screen: The Super AMOLED 6.4-inch display has been measured as the very best around, with super colours, great dynamic range and, essentially, the very best viewing experience you can have on a mobile phone. 

      Plus, there's a fingerprint scanner embedded in the display.
      
      Battery life: The battery life on the Galaxy S10 Plus is and improvement over the S9 Plus, thanks to the larger 4,100mAh battery inside. It'll easily reach bedtime with double digits still left in the tank.
      
      The S10 Plus also offers Samsung's new Wireless PowerShare, allowing you to wirelessly charge other devices on the rear of the handset.
      
      Camera: The trio of cameras on the Galaxy S10 Plus are among the best on the market, building on the excellent setup on the S9 series by offering more features, shooting modes and overall clarity. 
      Mini verdict: The Galaxy S10 Plus is packed full of the best Samsung has to offer, and it comes together to give you the best smartphone`
    },
    {
      id: 14,
      name: 'Pixel 3',
      brand: 'Google',
      price: 48000,
      imgUrl: '../../assets/images/pixel3.jpg',
      description: `The Samsung Galaxy S10 Plus is the best smartphone available right now, still.It's a big phone that's designed for big hands - and it takes the very best of what's on the smartphone market and puts it together in a compelling package that we've loved testing.
      Screen: The Super AMOLED 6.4-inch display has been measured as the very best around, with super colours, great dynamic range and, essentially, the very best viewing experience you can have on a mobile phone. 

      Plus, there's a fingerprint scanner embedded in the display.
      
      Battery life: The battery life on the Galaxy S10 Plus is and improvement over the S9 Plus, thanks to the larger 4,100mAh battery inside. It'll easily reach bedtime with double digits still left in the tank.
      
      The S10 Plus also offers Samsung's new Wireless PowerShare, allowing you to wirelessly charge other devices on the rear of the handset.
      
      Camera: The trio of cameras on the Galaxy S10 Plus are among the best on the market, building on the excellent setup on the S9 series by offering more features, shooting modes and overall clarity. 
      Mini verdict: The Galaxy S10 Plus is packed full of the best Samsung has to offer, and it comes together to give you the best smartphone`
    },
    {
      id: 15,
      name: 'XR',
      brand: 'iPhone ',
      price: 59990,
      imgUrl: '../../assets/images/xr.jpg',
      description: `The Samsung Galaxy S10 Plus is the best smartphone available right now, still.It's a big phone that's designed for big hands - and it takes the very best of what's on the smartphone market and puts it together in a compelling package that we've loved testing.
      Screen: The Super AMOLED 6.4-inch display has been measured as the very best around, with super colours, great dynamic range and, essentially, the very best viewing experience you can have on a mobile phone. 

      Plus, there's a fingerprint scanner embedded in the display.
      
      Battery life: The battery life on the Galaxy S10 Plus is and improvement over the S9 Plus, thanks to the larger 4,100mAh battery inside. It'll easily reach bedtime with double digits still left in the tank.
      
      The S10 Plus also offers Samsung's new Wireless PowerShare, allowing you to wirelessly charge other devices on the rear of the handset.
      
      Camera: The trio of cameras on the Galaxy S10 Plus are among the best on the market, building on the excellent setup on the S9 series by offering more features, shooting modes and overall clarity. 
      Mini verdict: The Galaxy S10 Plus is packed full of the best Samsung has to offer, and it comes together to give you the best smartphone`
    },

  ];
  constructor() { }
}
