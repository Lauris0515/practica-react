import "./Home.css";
import basedatos from "../utils/basedatos.json";

export function Home() {
  console.log(basedatos[0]);

  return (
    //zona de renderizacion
    <>
      <section className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-6">
            <h3 className="fuente">Servicios a un clic</h3>
            <h2 className="text-muted">
              {basedatos[0].nombreUsuario}
              <span className="fuente"></span>
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
              delectus nesciunt tenetur error nostrum enim quam corrupti
              praesentium, facere quasi mollitia accusamus, modi rem
              reprehenderit ad incidunt excepturi tempore, quia neque officia
              doloribus. Facilis excepturi qui minus consectetur illum numquam,
              magni soluta, dolor ducimus culpa veritatis vel dignissimos,
              consequuntur aliquam?
            </p>
          </div>
          <div className="col-12 col-md-6">
            <select class="form-select" aria-label="Default select example">
              <option selected>Tu Grupo Familiar</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <div className="row">
              <div className="col-12 col-md-2 mt-5">
                <i class="bi bi-person-circle fs-1 fuente"></i>
              </div>
              <div className="col-12 col-md-10 mt-5">
                <br />
                <p>Medico de familia: {basedatos[0].medicoDeFamilia}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-2 mt-5">
                <i class="bi bi-piggy-bank fs-1 fuente"></i>
              </div>
              <div className="col-12 col-md-10 mt-5">
                <br />
                <p>Grupo de ingreso: {basedatos[0].grupoDeIngreso}</p>
              </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-2 mt-5">
                    <i class="bi bi-building-fill fs-1 fuente"></i>
                </div>
                <div className="col-12 col-md-10 mt-5">
                    <p>IPS Basica: {basedatos[0].ips}</p>
                </div>
            </div>
            
          </div>
        </div>
      </section>
      <hr />
      <section className="container my-5">
        <div className="row">
            <div className="col-12 mb-5">
                <h4>Paciente: {basedatos[0].nombreUsuario}, estas son tus proximas citas </h4>
            </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3">
            {
                basedatos[0].citasMedicas.map(function(cita){
                    return(
                        <div className="col">
                            <div className="card h-100 shadow">
                                <h3>{cita.especialidad}</h3>
                                <h4>Fecha: {cita.fecha}</h4>
                                <h4>Direccion: {cita.direccion}</h4>
                            </div>
                        </div>
                    )
                })
            }
        </div>
      </section>      
    </>
  )
}
