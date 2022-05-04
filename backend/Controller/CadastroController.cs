using backend.Model;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Controller
{
  [ApiController]
  [Route("[controller]")]
  public class CadastroController: ControllerBase
  {
    private static List<Cadastro> cadastros = new List<Cadastro>();
    private static int id = 1;

   [HttpPost]
   public void adicionarCadastro([FromBody] Cadastro cadastro)
    {
      cadastro.Id = id++;
      cadastros.Add(cadastro);
      Console.WriteLine(cadastro.nome);
    }
    [HttpGet]
    public List<Cadastro> receberTodosCadastros()
    {
      return cadastros;
    }
  
    [HttpGet("{id}")]
    public IActionResult retornaCadastroId(int id)
    {
      Cadastro cadastro = cadastros.FirstOrDefault(cadastro => cadastro.Id == id);
      if(cadastro != null)
      {
        return Ok(cadastro);
      }
      return NotFound();
      
    }
  }
}
