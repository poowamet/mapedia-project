import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Service {
image_project(id: number | null): Observable<any> {
  if (id == 1){
    return of(
      {
        name: "Project Alpha - Southern Expedition",
        image: [
          {
            image:"https://picsum.photos/seed/project1/400/300",
            file_name: "alpha_img_01.jpg",
            date: "2024-03-15T10:30:00Z",
            size: "120KB",
            lat: 13.7563,
            long: 100.5018,
            absolute_altitude: 15.5,
            relative_altitude: 100,
            iso: 104,
            description: "Overlooking the Chao Phraya River."
          },
          {
            image:"https://picsum.photos/seed/project2/400/300",
            file_name: "alpha_img_02.png",
            date: "2024-03-15T11:00:00Z",
            size: "150KB",
            lat: 13.7480,
            long: 100.5180,
            absolute_altitude: 12.0,
            relative_altitude: 90,
            iso: 104,
            description: "Wat Arun in the morning light."
          },
          {
            image:"https://picsum.photos/seed/project3/400/300",
            file_name: "alpha_img_03.jpg",
            date: "2024-03-16T09:15:00Z",
            size: "110KB",
            lat: 13.7650,
            long: 100.4900,
            absolute_altitude: 18.0,
            relative_altitude: 110,
            iso: 104,
            description: "Local market scene."
          },
          {
            image:"https://picsum.photos/seed/project4/400/300",
            file_name: "alpha_img_04.png",
            date: "2024-03-16T14:00:00Z",
            size: "130KB",
            lat: 13.7300,
            long: 100.5500,
            absolute_altitude: 10.0,
            relative_altitude: 80,
            iso: 104,
            description: "Busy street intersection."
          },
          {
            image:"https://picsum.photos/seed/project5/400/300",
            file_name: "alpha_img_05.jpg",
            date: "2024-03-17T08:45:00Z",
            size: "100KB",
            lat: 13.7700,
            long: 100.4800,
            absolute_altitude: 20.0,
            relative_altitude: 120,
            iso: 104,
            description: "Green space in the city."
          },
          {
            image:"https://picsum.photos/seed/project6/400/300",
            file_name: "alpha_img_06.png",
            date: "2024-03-17T16:20:00Z",
            size: "160KB",
            lat: 13.7600,
            long: 100.5200,
            absolute_altitude: 14.0,
            relative_altitude: 95,
            iso: 104,
            description: "Skytrain view."
          },
          {
            image:"https://picsum.photos/seed/project7/400/300",
            file_name: "alpha_img_07.jpg",
            date: "2024-03-18T10:00:00Z",
            size: "115KB",
            lat: 13.7500,
            long: 100.5300,
            absolute_altitude: 17.0,
            relative_altitude: 105,
            iso: 104,
            description: "Canal boat journey."
          },
          {
            image:"https://picsum.photos/seed/project8/400/300",
            file_name: "alpha_img_08.png",
            date: "2024-03-18T13:30:00Z",
            size: "140KB",
            lat: 13.7400,
            long: 100.5400,
            absolute_altitude: 11.0,
            relative_altitude: 85,
            iso: 104,
            description: "Street art."
          },
          {
            image:"https://picsum.photos/seed/project9/400/300",
            file_name: "alpha_img_09.jpg",
            date: "2024-03-19T09:00:00Z",
            size: "125KB",
            lat: 13.7800,
            long: 100.4700,
            absolute_altitude: 22.0,
            relative_altitude: 130,
            iso: 104,
            description: "Temple architecture."
          },
          {
            image:"https://picsum.photos/seed/project10/400/300",
            file_name: "alpha_img_10.png",
            date: "2024-03-19T15:00:00Z",
            size: "170KB",
            lat: 13.7200,
            long: 100.5600,
            absolute_altitude: 9.0,
            relative_altitude: 75,
            iso: 104,
            description: "Night market vibrant."
          }
        ]
      },
    )
  }else if (id == 2){
    return of(
      {
        name: "Project Beta - Mountain Trails",
        image: [
          {
            image:"https://picsum.photos/seed/project1/400/300",
            file_name: "beta_img_01.jpg",
            date: "2024-04-01T07:00:00Z",
            size: "200KB",
            lat: 18.7880,
            long: 98.9870,
            absolute_altitude: 500.0,
            relative_altitude: 200,
            iso: 104,
            description: "Sunrise over Doi Suthep."
          },
          {
            image:"https://picsum.photos/seed/project2/400/300",
            file_name: "beta_img_02.png",
            date: "2024-04-01T09:30:00Z",
            size: "220KB",
            lat: 18.7950,
            long: 98.9950,
            absolute_altitude: 550.0,
            relative_altitude: 250,
            iso: 104,
            description: "Lush jungle path."
          },
          {
            image:"https://picsum.photos/seed/project3/400/300",
            file_name: "beta_img_03.jpg",
            date: "2024-04-02T11:00:00Z",
            size: "190KB",
            lat: 18.7700,
            long: 98.9700,
            absolute_altitude: 480.0,
            relative_altitude: 180,
            iso: 104,
            description: "Waterfall discovery."
          },
          {
            image:"https://picsum.photos/seed/project4/400/300",
            file_name: "beta_img_04.png",
            date: "2024-04-02T15:45:00Z",
            size: "250KB",
            lat: 18.8000,
            long: 99.0000,
            absolute_altitude: 600.0,
            relative_altitude: 300,
            iso: 104,
            description: "Scenic mountain vista."
          },
          {
            image:"https://picsum.photos/seed/project5/400/300",
            file_name: "beta_img_05.jpg",
            date: "2024-04-03T10:15:00Z",
            size: "180KB",
            lat: 18.7800,
            long: 98.9800,
            absolute_altitude: 520.0,
            relative_altitude: 220,
            iso: 104,
            description: "Local village by the mountain."
          }
        ]
      },
    )
  }else{
    return of(
      {
        name: "Project Gamma - Urban Development",
        image: []
      },
    )
  }
}}
