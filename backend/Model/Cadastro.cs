using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Model
{
  public class Cadastro
  {
    
    public int Id { get; set; }
    [Required(ErrorMessage = "O campo nome de usuario e obrigatorio")]
    public string nome { get; set; }
    [Required(ErrorMessage = "O email e obrigadorio")]
    public string email { get; set; }
    [Required(ErrorMessage = "A senha e Obrigadoria")]
    public string senha { get; set; }
  }
}
