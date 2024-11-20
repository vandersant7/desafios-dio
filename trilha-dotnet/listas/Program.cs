using listas.Models;

Pessoa p1 = new("Evandro", "Santos"); // Dessa maneira estamos usando os parametros no construtor

Pessoa p2 = new("William", "Tower");

Curso CursoDeIngles = new();
CursoDeIngles.Nome = "Inglês";
CursoDeIngles.Alunos = new List<Pessoa>();


CursoDeIngles.AdicionarAluno(p1);
CursoDeIngles.AdicionarAluno(p2);
CursoDeIngles.ListarAlunos();
// {
//     Nome = "Evandro",
//     Idade = 21
// };

// p1.Apresentar();
