import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from './app.component';

@Injectable()
export class DataService {

  constructor() { }

  getFlatData() : Observable<Item[]>{
    return of<Item[]>([
      {
        title: 'Folder 1',
        id: 1,
      },
      {
        title: 'Folder 2',
        id: 2,
      },
      {
        title: 'File 2.1',
        id: 3,
        parent: 2,
      },
      {
        title: 'Folder 2.2',
        id: 33,
        parent: 2,
      },
      {
        title: 'Folder 2.2.1',
        id: 4,
        parent: 33,
      },
      {
        title: 'Folder 2.2.2',
        id: 5,
        parent: 33,
      },
      {
        title: 'Folder 2.2.3',
        id: 6,
        parent: 33
      },
      {
        title: 'File 2.2.3.1',
        id: 7,
        parent: 6
      },
      {
        title: 'File 2.2.3.2',
        id: 8,
        parent: 6
      },
      {
        title: 'Folder 2.2.4',
        id: 9,
        parent: 33
      },
      {
        title: 'File 2.2.4.1',
        id: 10,
        parent: 9,
      },
      {
        title: 'Folder 2.3',
        id: 11,
        parent: 2,
      },
      {
        title: 'Folder 2.3.1',
        id: 12,
        parent: 11
      },
      {
        title: 'File 2.3.1.1',
        id: 13,
        parent: 12,
      },
      {
        title: 'File 2.3.1.2',
        id: 14,
        parent: 12,
      },
      {
        title: 'File 2.3.1.3',
        id: 15,
        parent: 12,
      },
      {
        title: 'Folder 2.3.1.4',
        id: 16,
        parent: 12,
      },
      {
        title: 'File 2.3.1.4.1',
        id: 17,
        parent: 16,
      },
    ])
  }

  getTreeData() {
    return of([
      {
        title: 'childless',
        id: 1,
        children: []
      },
      {
        title: 'great grandparent',
        id: 2,
        children: [
          {
            title: 'childless grandsibling',
            id: 3,
            children: []
          },
          {
            title: 'grandparent',
            id: 33,
            children: [
              {
                title: 'childless sibling',
                id: 4,
                children: []
              },
              {
                title: 'another childless sibling',
                id: 5,
                children: []
              },
              {
                title: 'parent',
                id: 6,
                children: [
                  {
                    title: 'child',
                    id: 7,
                    children: []
                  },
                  {
                    title: 'another child',
                    id: 8,
                    children: []
                  },
                ]
              },
              {
                title: 'another parent',
                id: 9,
                children: [
                  {
                    title: 'child',
                    id: 10,
                    children: []
                  },
                ]
              },
            ]
          },
          {
            title: 'another grandparent',
            id: 11,
            children: [
              {
                title: 'parent',
                id: 12,
                children: [
                  {
                    title: 'child',
                    id: 13,
                    children: []
                  },
                  {
                    title: 'another child',
                    id: 14,
                    children: []
                  },
                  {
                    title: 'a third child',
                    id: 15,
                    children: []
                  },
                  {
                    title: 'yet another child',
                    id: 16,
                    children: [
                      {
                        title: 'baby',
                        id: 17,
                        children: []
                      },
                    ]
                  },
                ]
              },
            ]
          },
        ]
      },
    ])
  }
}