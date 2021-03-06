package br.com.projeto.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;
import java.util.Optional;

import br.com.projeto.beans.Usuario;
import br.com.projeto.DAO.UsuarioDAO;

@Controller
public class UsuarioController {

	@Autowired
	private UsuarioDAO dao;
	
	@GetMapping("/index")
	   public String homeApp() {
		   return "index";
	   }
	@GetMapping("/cadastro")
	   public String Cadastro() {
		   return "cadastro";
	   }
	@GetMapping("/atualizar")
	   public String Atualizar() {
		   return "update";
	   }
	
	@GetMapping("/Usuario")
	public ResponseEntity<List<Usuario>> getAll(){
		List<Usuario> list = (List<Usuario>)dao.findAll();
	
		if(list.size()==0) {
			return ResponseEntity.status(404).build();
		}
		
		return ResponseEntity.ok(list);
	}

	@PostMapping("/novousuario")
    public ResponseEntity<Usuario> addUsuario(@RequestBody Usuario objeto){
       try {
    	   System.out.println(objeto);
        	dao.save(objeto);
            return ResponseEntity.ok(objeto);
        }catch(Exception e) {
        	e.printStackTrace();
        	return ResponseEntity.status(403).build();
        }

	}
	
	@PostMapping("/remover/")
	public ResponseEntity<Usuario> deleteById(@RequestBody Usuario usuario) {
		Usuario Usuario = dao.findById(usuario.getId());
		dao.delete(Usuario);
		return ResponseEntity.ok(Usuario);
	}
	
	@RequestMapping("/indexUpdate/{userId}")
	public ModelAndView index(@PathVariable("userId") int id) {
		ModelAndView mv = new ModelAndView("indexUpdate");
		Iterable<Usuario> itens = dao.findAll();
		mv.addObject("itens", itens);
		Usuario item = dao.findById(id);
		mv.addObject("itens", itens);
		mv.addObject("item", item);
		return mv;
	}
    

   @PostMapping("/login")
   public ResponseEntity<Usuario> getAllByEmailAndSenha(@RequestBody Usuario objeto){
	   System.out.println(objeto.getEmail());
	   System.out.println(objeto.getSenha());
	   Usuario resposta = dao.findByEmailAndSenha(objeto.getEmail(),objeto.getSenha());
	   System.out.println(resposta);
//	   if (resposta==null) {
//		   return ResponseEntity.status(404).build();
//	   }
   
	   return ResponseEntity.ok(resposta);
}	
  
}