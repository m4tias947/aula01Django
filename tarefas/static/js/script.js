//Função que pergunta ao usuario se ele quer msm excluir a tarefa

document.querySelectorAll(".delete-btn").forEach(
    btn => {
        btn.addEventListener("click", function (e){
           e.preventDefault();

           const delLink = this.getAttribute("href");

           if(delLink && corfirm("Quer deletar esta tarefa?")){
              Window.location.href = delLink;
           }
        });
    }
);