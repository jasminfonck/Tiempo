class Empleado {

     public nombre:string;
     public identificacion:string;
     public  horaIngreso:Tiempo;
     public dactilar:Huella;
     public horaEntrada:Tiempo;
     public horaSalida;
     protected jornadaH:number=12;
     protected jornadaM:number=0;



        public get (nombre:string) : string {
            return this.nombre;
        }


          public set (nombre : string) {
              this.nombre = nombre;
          }


      protected get identifica() : string {
          return this.identificacion;
      }


      protected set identifica(identifica : string) {
          this.identificacion = identifica;
      }


    protected get H_Ingreso( horaIngreso:Tiempo) : Tiempo {
        return this.horaIngreso;
    }


  protected set H_Ingreso(Hora_ingreso : Tiempo) {
      this.horaIngreso =Hora_ingreso;

  }


  protected get huella(dactilar:Huella) : Huella {
      return this.huella;
  }

  public set huella(huella :Huella) {
      this.dactilar =huella;
  }

  public establecerHoraEntrada(hora:Tiempo):void{
        this.horaEntrada=hora;
        establecerHoraSalida();

  }
 public mostrarHoraEntrada():Tiempo{
     return this.horaEntrada;
 }
 protected establecerHoraSalida():void{
     this.horaSalida=this.horaEntrada.SumarHoraYMinuto(this.horaEntrada,this.jornadaH,this.jornadaM);

 }
 public mostrarHoraSalida():Tiempo{
     return this.horaSalida;
 }


}
