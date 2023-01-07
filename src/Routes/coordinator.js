// export const goToAlunos =(navigate) =>{
//     navigate("/alunos")
// }

// export const goToSobre =(navigate) =>{
//     navigate("/sobre")
// }

// export const goToPaginaInicial =(navigate) =>{
//     navigate("/")
// }

export const goToAlunos = (navigate) => {
    console.log(typeof navigate);
    navigate("/alunos");
  };
  
  export const goToSobre = (navigate) => {
    console.log(typeof navigate);
    navigate("/sobre");
  };
  
  export const goToPaginaInicial = (navigate) => {
    console.log(typeof navigate);
    navigate("/");
  };
  