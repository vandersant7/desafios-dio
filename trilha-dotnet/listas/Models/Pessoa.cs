using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace listas.Models
{
    public class Pessoa
    {

        public Pessoa()
        {
            
        }

        public Pessoa(string nome, string sobrenome)
        {

        }

        private string _nome;
        public string Nome
        {
            get => _nome.ToUpper();

            set
            {
                if (value == "")
                {
                    throw new ArgumentException("O nome não pode ser vazio");
                }

                _nome = value;
            }

        }

        public string Sobrenome { get; set; }
        public string NomeCompleto => $"{Nome} {Sobrenome}".ToUpper();


        private int _idade;
        public int Idade
        {
            get => _idade;
            set
            {
                if (value < 0)
                {
                    throw new ArgumentException("A idade não pode ser menor que zero");
                }
                _idade = value;
            }
        }


        public void Apresentar()
        {
            Console.WriteLine($"Olá meu nome é {Nome} e tenho {Idade} anos");
        }

    }
}