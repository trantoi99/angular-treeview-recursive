import {
  Component, Input, OnInit, Output, EventEmitter
} from '@angular/core';
import { Item } from '../app.component';

@Component({
  selector: 'app-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.css']
})
export class TreeviewComponent {
  @Input() list = [];
  @Input() opened = new Set();
  @Input() matcher = (term, item) => item.title.toLowerCase().includes(term.toLowerCase());
  @Output() addChild = new EventEmitter<any>();
  @Output() removeChild = new EventEmitter<any>();

  found: Item[] = [];

  toggle(id) {
    this.opened.has(id) ? this.opened.delete(id) : !this.opened.add(id);
  }

  getItemsAtParent(parentId) {
    return this.list.filter(item => {
      return parentId ? item.parent === parentId : !item.parent
    });
  }

  hasChildren(id) {
    const found = this.list.find(item => item.parent === +id);
    return found;
  }
  collapseAll() {
    this.opened.clear();
  }

  expandAll() {
    const ids = this.list.map(item => item.id);
    this.opened = new Set(ids);
  }

  show(id) {
    let item = 'parent' in id ? id : this.find(+id);

    if (!item) {
      return;
    }

    while (item.parent) {
      this.opened.add(item.parent);
      item = this.find(item.parent);
    }
  }

  private find(id) {
    return this.list.find(item => item.id === id);
  }

  searchReset() {
    this.found = [];
  }

  search(term) {
    this.found = this.list.filter(item => this.matcher.call(this, term, item));
    this.found.forEach(item => this.show(item))
  }
}