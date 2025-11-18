import { Component, OnInit } from '@angular/core';
import { Invoice } from '../../models/invoice';
import { InvoiceService } from '../../services/invoice.service';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { ClienteViewComponent } from '../cliente-view/cliente-view.component';
import { ListItemsComponent } from '../list-items/list-items.component';
import { InvoiceViewComponent } from '../invoice-view/invoice-view.component';
import { RowItemComponent } from '../row-item/row-item.component';

@Component({
  selector: 'app-invoice',
  imports: [CompanyViewComponent, ClienteViewComponent, ListItemsComponent, InvoiceViewComponent, RowItemComponent],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent implements OnInit {
  
  invoice!: Invoice;
  
  constructor(private service: InvoiceService){}

  ngOnInit(): void {
    this.invoice = this.service.getInvoice();    
  }

}
