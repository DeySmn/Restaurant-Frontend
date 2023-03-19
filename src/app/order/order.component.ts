import { Component, OnInit } from '@angular/core';
import { foodType } from '../models/foodType';
import { order } from '../models/order';
import { status } from '../models/status';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  pageNo_ongoing: number = 1;
  pageNo_past: number = 1;
  orderPerPage: number = 4;
  rating: number[] = [1, 2, 3, 4, 5];
  orders: order[] = [
    {
      orderId: '#12342',
      userId: '#1',
      dateOfOrder: 'Timestamp',
      orderDetails: [
        {
          pId: 1,
          name: 'Boba Tea',
          desc: 'Amazingly fresh and squisly flavorable choco chips are added in it',
          price: 200,
          quantity: 1,
          avgRating: 4.5,
          img_url: [
            '../../assets/img/breakfast-1.jpg',
            '../../assets/img/hero-1.jpg',
            '../../assets/img/hero-2.jpg',
            '../../assets/img/hero-3.jpg',
          ],
          type: foodType.SPEACIAL_DISH,
          catagory: 'VEG',
          live: true,
        },
      ],
      actualAmount: 1.0,
      taxRate: 18,
      deliveryFee: 25,
      couponCode: 'First100',
      netAmount: 1000.0,
      status: status.ACCEPTED,
      payment: 'UPI',
      rating: 5,
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  ongoingOrdersList: order[] = [
    {
      orderId: '12342',
      userId: '#1',
      dateOfOrder: 'October 16, 2:57 PM',
      orderDetails: [
        {
          pId: 1,
          name: 'Boba Tea',
          desc: 'Amazingly fresh and squisly flavorable choco chips are added in it',
          price: 200,
          quantity: 2,
          avgRating: 4.5,
          img_url: [
            '../../assets/img/breakfast-1.jpg',
            '../../assets/img/hero-1.jpg',
            '../../assets/img/hero-2.jpg',
            '../../assets/img/hero-3.jpg',
          ],
          type: foodType.SPEACIAL_DISH,
          catagory: 'VEG',
          live: true,
        },
      ],
      actualAmount: 1.0,
      taxRate: 18,
      deliveryFee: 25,
      couponCode: 'First100',
      netAmount: 1000.0,
      status: status.ACCEPTED,
      payment: 'UPI',
      rating: 5,
    },
    {
      orderId: '#12342',
      userId: '#1',
      dateOfOrder: 'October 16, 2:57 PM',
      orderDetails: [
        {
          pId: 1,
          name: 'Boba Tea',
          desc: 'Amazingly fresh and squisly flavorable choco chips are added in it',
          price: 200,
          quantity: 2,
          avgRating: 4.5,
          img_url: [
            '../../assets/img/breakfast-1.jpg',
            '../../assets/img/hero-1.jpg',
            '../../assets/img/hero-2.jpg',
            '../../assets/img/hero-3.jpg',
          ],
          type: foodType.SPEACIAL_DISH,
          catagory: 'VEG',
          live: true,
        },
      ],
      actualAmount: 1.0,
      taxRate: 18,
      deliveryFee: 25,
      couponCode: 'First100',
      netAmount: 1000.0,
      status: status.ACCEPTED,
      payment: 'UPI',
      rating: 5,
    },
    {
      orderId: '#12342',
      userId: '#1',
      dateOfOrder: 'October 16, 2:57 PM',
      orderDetails: [
        {
          pId: 1,
          name: 'Boba Tea',
          desc: 'Amazingly fresh and squisly flavorable choco chips are added in it',
          price: 200,
          quantity: 2,
          avgRating: 4.5,
          img_url: [
            '../../assets/img/breakfast-1.jpg',
            '../../assets/img/hero-1.jpg',
            '../../assets/img/hero-2.jpg',
            '../../assets/img/hero-3.jpg',
          ],
          type: foodType.SPEACIAL_DISH,
          catagory: 'VEG',
          live: true,
        },
      ],
      actualAmount: 1.0,
      taxRate: 18,
      deliveryFee: 25,
      couponCode: 'First100',
      netAmount: 1000.0,
      status: status.ACCEPTED,
      payment: 'UPI',
      rating: 5,
    },
    {
      orderId: '#12342',
      userId: '#1',
      dateOfOrder: 'October 16, 2:57 PM',
      orderDetails: [
        {
          pId: 1,
          name: 'Boba Tea',
          desc: 'Amazingly fresh and squisly flavorable choco chips are added in it',
          price: 200,
          quantity: 2,
          avgRating: 4.5,
          img_url: [
            '../../assets/img/breakfast-1.jpg',
            '../../assets/img/hero-1.jpg',
            '../../assets/img/hero-2.jpg',
            '../../assets/img/hero-3.jpg',
          ],
          type: foodType.SPEACIAL_DISH,
          catagory: 'VEG',
          live: true,
        },
      ],
      actualAmount: 1.0,
      taxRate: 18,
      deliveryFee: 25,
      couponCode: 'First100',
      netAmount: 1000.0,
      status: status.ACCEPTED,
      payment: 'UPI',
      rating: 5,
    },
    {
      orderId: '#12342',
      userId: '#1',
      dateOfOrder: 'October 16, 2:57 PM',
      orderDetails: [
        {
          pId: 1,
          name: 'Boba Tea',
          desc: 'Amazingly fresh and squisly flavorable choco chips are added in it',
          price: 200,
          quantity: 2,
          avgRating: 4.5,
          img_url: [
            '../../assets/img/breakfast-1.jpg',
            '../../assets/img/hero-1.jpg',
            '../../assets/img/hero-2.jpg',
            '../../assets/img/hero-3.jpg',
          ],
          type: foodType.SPEACIAL_DISH,
          catagory: 'VEG',
          live: true,
        },
      ],
      actualAmount: 1.0,
      taxRate: 18,
      deliveryFee: 25,
      couponCode: 'First100',
      netAmount: 1000.0,
      status: status.ACCEPTED,
      payment: 'UPI',
      rating: 5,
    },
  ];
  pastOrdersList: order[] = [
    {
      orderId: '#12342',
      userId: '#1',
      dateOfOrder: 'October 16, 2:57 PM',
      orderDetails: [
        {
          pId: 1,
          name: 'Boba Tea',
          desc: 'Amazingly fresh and squisly flavorable choco chips are added in it',
          price: 200,
          quantity: 2,
          avgRating: 4.5,
          img_url: [
            '../../assets/img/breakfast-1.jpg',
            '../../assets/img/hero-1.jpg',
            '../../assets/img/hero-2.jpg',
            '../../assets/img/hero-3.jpg',
          ],
          type: foodType.SPEACIAL_DISH,
          catagory: 'VEG',
          live: true,
        },
      ],
      actualAmount: 1.0,
      taxRate: 18,
      deliveryFee: 25,
      couponCode: 'First100',
      netAmount: 1000.0,
      status: status.ACCEPTED,
      payment: 'UPI',
      rating: 5,
    },
    {
      orderId: '#12342',
      userId: '#1',
      dateOfOrder: 'October 16, 2:57 PM',
      orderDetails: [
        {
          pId: 1,
          name: 'Boba Tea',
          desc: 'Amazingly fresh and squisly flavorable choco chips are added in it',
          price: 200,
          quantity: 2,
          avgRating: 4.5,
          img_url: [
            '../../assets/img/breakfast-1.jpg',
            '../../assets/img/hero-1.jpg',
            '../../assets/img/hero-2.jpg',
            '../../assets/img/hero-3.jpg',
          ],
          type: foodType.SPEACIAL_DISH,
          catagory: 'VEG',
          live: true,
        },
      ],
      actualAmount: 1.0,
      taxRate: 18,
      deliveryFee: 25,
      couponCode: 'First100',
      netAmount: 1000.0,
      status: status.ACCEPTED,
      payment: 'UPI',
      rating: 5,
    },
    {
      orderId: '#12342',
      userId: '#1',
      dateOfOrder: 'October 16, 2:57 PM',
      orderDetails: [
        {
          pId: 1,
          name: 'Boba Tea',
          desc: 'Amazingly fresh and squisly flavorable choco chips are added in it',
          price: 200,
          quantity: 2,
          avgRating: 4.5,
          img_url: [
            '../../assets/img/breakfast-1.jpg',
            '../../assets/img/hero-1.jpg',
            '../../assets/img/hero-2.jpg',
            '../../assets/img/hero-3.jpg',
          ],
          type: foodType.SPEACIAL_DISH,
          catagory: 'VEG',
          live: true,
        },
      ],
      actualAmount: 1.0,
      taxRate: 18,
      deliveryFee: 25,
      couponCode: 'First100',
      netAmount: 1000.0,
      status: status.ACCEPTED,
      payment: 'UPI',
      rating: 5,
    },
    {
      orderId: '#12342',
      userId: '#1',
      dateOfOrder: 'October 16, 2:57 PM',
      orderDetails: [
        {
          pId: 1,
          name: 'Boba Tea',
          desc: 'Amazingly fresh and squisly flavorable choco chips are added in it',
          price: 200,
          quantity: 2,
          avgRating: 4.5,
          img_url: [
            '../../assets/img/breakfast-1.jpg',
            '../../assets/img/hero-1.jpg',
            '../../assets/img/hero-2.jpg',
            '../../assets/img/hero-3.jpg',
          ],
          type: foodType.SPEACIAL_DISH,
          catagory: 'VEG',
          live: true,
        },
      ],
      actualAmount: 1.0,
      taxRate: 18,
      deliveryFee: 25,
      couponCode: 'First100',
      netAmount: 1000.0,
      status: status.ACCEPTED,
      payment: 'UPI',
      rating: 5,
    },
    {
      orderId: '#12341',
      userId: '#1',
      dateOfOrder: 'Timestamp',
      orderDetails: [
        {
          pId: 1,
          name: 'Boba Tea',
          desc: 'Amazingly fresh and squisly flavorable choco chips are added in it',
          price: 200,
          quantity: 1,
          avgRating: 4.5,
          img_url: [
            '../../assets/img/breakfast-1.jpg',
            '../../assets/img/hero-1.jpg',
            '../../assets/img/hero-2.jpg',
            '../../assets/img/hero-3.jpg',
          ],
          type: foodType.SPEACIAL_DISH,
          catagory: 'VEG',
          live: true,
        },
      ],
      actualAmount: 1.0,
      taxRate: 18,
      deliveryFee: 25,
      couponCode: 'First100',
      netAmount: 1000.0,
      status: status.DELIVERED,
      payment: 'UPI',
      rating: 5,
    },
  ];
  setRating(rate: number) {
    console.log(rate);
  }
}
