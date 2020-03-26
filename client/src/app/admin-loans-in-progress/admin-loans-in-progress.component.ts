import { Component, OnInit } from '@angular/core';
import { faEye, faTrashAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Loan } from 'src/_models/loan.model';
import { MsgHelper } from 'src/_helpers/msg.helper';
import { LoanService } from 'src/_services/loan.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoanInfoComponent } from '../admin-loans-finished/loan-info/loan-info.component';
import { DateHelper } from 'src/_helpers/date.helper';
import { ResourceLoaned } from 'src/_models/resourceLoaned.model';
import { ResourceLoanedService } from 'src/_services/resourceLoaned.service';
import { UserService } from 'src/_services/user.service';
import { User } from 'src/_models/user.model';

@Component({
  selector: 'app-admin-loans-in-progress',
  templateUrl: './admin-loans-in-progress.component.html',
  styleUrls: ['./admin-loans-in-progress.component.css']
})
export class AdminLoansInProgressComponent implements OnInit {

  /**
  * Icono de ver información
  */
  public faEye = faEye;
  /**
  * Icono de Finalizar prestamos
  */
  public faPaperPlane = faPaperPlane;

  /**
  * Icono de Usuario
  */
  public faTrashAlt = faTrashAlt;

  /**
   * Prestamos registrados
   */
  public loans: Array<Loan>;

  /**
   * ¿Está cargando la petición?
   */
  public weHaveLoan: boolean;
    /**
   * Prestamos registrados con usuarios
   */
  public loansShow : Array<Loan>;

  constructor(private loanService: LoanService,private modalService: NgbModal,
    private dateHelper : DateHelper,
    private serviceResourcesLoaned : ResourceLoanedService,
    private serviceUser : UserService,
    private serviceLoan : LoanService
    ) {
    
      this.loans = new Array<Loan>();
      this.loansShow = new Array<Loan>();
     }
  ngOnInit() {
    this.getLoan();
  }
  /**
   * Cargar los prestamos
   */
  private async getLoan() { 
    try {
      
      let res: any = await this.loanService.list().toPromise();
      res.forEach((e: Object) => {
        if(Loan.fromJSON(e).state == 1){
          this.loans.push(Loan.fromJSON(e));
        } 
      }); 
      
    } catch (err) {
      new MsgHelper().showError(err.error);
    }
    this.weHaveLoan = this.loans.length > 0;
    this.getUsers();
    
  }
  /**
   * Obtener los usuarios
   */
  public async getUsers(){
    this.loans.forEach(element => {
      this.getResourceLoaned(element);
    });
  }
  /**
   * Obtener id del usuario
   */
  public async getResourceLoaned(varLoan:Loan){
    let idUser : string;
    let res: any = await this.serviceResourcesLoaned.get_by_loanId(varLoan.loanId).toPromise(); 
    res.forEach((e: Object) => {
      idUser = ResourceLoaned.fromJSON(e).userId;
    });  
    this.setUser(idUser,varLoan);
  }
  /**
   * Agregar usuario al prestamo
   */
  private async setUser(id : string,varLoan:Loan){
    try {
      let res = await this.serviceUser.get(id).toPromise();
      let user = User.fromJSON(res);
      
      varLoan.user = user;
      this.loansShow.push(varLoan);

    } catch (err) {
      new MsgHelper().showError(err.error);
    }
  }
  /**
   * Mostrar info
   */
  public showOnClick(l : Loan) {
    LoanInfoComponent.loan = l;
    this.modalService.open(LoanInfoComponent);
  }
/**
  * Invocada al dar click en Finalizar
  * @param id Identificador del prestamo
  */
 public async finishedLoan(auxLoan : Loan) {
  auxLoan.state = 2;
  let msg = new MsgHelper();
  let res = await msg.showConfirmDialog('¿Desea finalizar el prestamo?','');
  if(res.value){
    try {
    
      await this.serviceLoan.update(auxLoan.loanId,auxLoan).toPromise();

      new MsgHelper().showSuccess("Prestamo finalizado exitosamente");
    } catch (err) {
      if (err.status == 422) {
        new MsgHelper().showError(err.error.error);
      } else {
        new MsgHelper().showError(err.message);
      }

      }
    }

  }

  public async sendMessage(){
    let msg = new MsgHelper();
    let res = await msg.showConfirmMessage('¿Desea enviar correo de solicitud de recursos?','');

    if(res.value){

    }
  }

}