import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  menu = [{
    title: 'السلة',
    icon: '../../assets/icons/cart/cart_c.png',
    count: 4,
    route: '/cart'
  },
  {
    title: 'الطلبات',
    icon: '../../assets/icons/invoives/invoives.png',
    count: 1,
    route: '/orders'

  }
    ,
  {
    title: 'الإشعارات',
    icon: '../../assets/icons/notification/notification.png',
    route: '/notifications'

  }
    ,
  {
    title: 'موقعنا بالخريطة',
    icon: '../../assets/icons/MAP/MAP.png',
    route: '/location'

  }
  ]
  constructor() { }

  ngOnInit() {
  }

}
