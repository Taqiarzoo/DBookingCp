import { Injectable } from '@angular/core';
import { Place } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class PlaceService {
  private _place: Place[] = [
    {
      id: 1001,
      name: 'Damsna Resourt',
      discription: 'A great Place to vsit for turest',
      price: 200,
      src: 'https://media.istockphoto.com/photos/planet-earth-in-outer-space-picture-id825167430?k=20&m=825167430&s=170667a&w=0&h=iXLurlorK6aEkzt1IexvmrGwPq6uMNx7L1LKNkKeIEU=',
    },
    {
      id: 1002,
      name: 'Damsna Resourt',
      discription: 'A great Place to vsit for turest',
      price: 200,
      src: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fkargil.nic.in%2Ftourist-place%2Fsuru-valley%2F&psig=AOvVaw34TPyDR_CubryP9T6K2lE6&ust=1645634667526000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKCY74Hhk_YCFQAAAAAdAAAAABAa',
    },
    {
      id: 1003,
      name: 'Damsna Resourt',
      discription: 'A great Place to vsit for turest',
      price: 200,
      src: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fkargil.nic.in%2Ftourist-place%2Fsuru-valley%2F&psig=AOvVaw34TPyDR_CubryP9T6K2lE6&ust=1645634667526000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKCY74Hhk_YCFQAAAAAdAAAAABAa',
    },
    {
      id: 1004,
      name: 'Damsna Resourt',
      discription: 'A great Place to vsit for turest',
      price: 200,
      src: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fkargil.nic.in%2Ftourist-place%2Fsuru-valley%2F&psig=AOvVaw34TPyDR_CubryP9T6K2lE6&ust=1645634667526000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKCY74Hhk_YCFQAAAAAdAAAAABAa',
    },
    {
      id: 1005,
      name: 'Damsna Resourt',
      discription: 'A great Place to vsit for turest',
      price: 200,
      src: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fkargil.nic.in%2Ftourist-place%2Fsuru-valley%2F&psig=AOvVaw34TPyDR_CubryP9T6K2lE6&ust=1645634667526000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKCY74Hhk_YCFQAAAAAdAAAAABAa',
    },
    {
      id: 1006,
      name: 'Damsna Resourt',
      discription: 'A great Place to vsit for turest',
      price: 200,
      src: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fkargil.nic.in%2Ftourist-place%2Fsuru-valley%2F&psig=AOvVaw34TPyDR_CubryP9T6K2lE6&ust=1645634667526000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKCY74Hhk_YCFQAAAAAdAAAAABAa',
    },
    {
      id: 1007,
      name: 'Damsna Resourt',
      discription: 'A great Place to vsit for turest',
      price: 200,
      src: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fkargil.nic.in%2Ftourist-place%2Fsuru-valley%2F&psig=AOvVaw34TPyDR_CubryP9T6K2lE6&ust=1645634667526000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKCY74Hhk_YCFQAAAAAdAAAAABAa',
    },
    {
      id: 1008,
      name: 'Damsna Resourt',
      discription: 'A great Place to vsit for turest',
      price: 200,
      src: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fkargil.nic.in%2Ftourist-place%2Fsuru-valley%2F&psig=AOvVaw34TPyDR_CubryP9T6K2lE6&ust=1645634667526000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKCY74Hhk_YCFQAAAAAdAAAAABAa',
    },
  ];

  constructor() {}

  get place() {
    return [...this._place];
  }
}
