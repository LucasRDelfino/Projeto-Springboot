package br.com.projeto.DAO;

import org.springframework.data.repository.CrudRepository;

import br.com.projeto.beans.Usuario;


public interface UsuarioDAO extends CrudRepository<Usuario, Integer>{ 
	public Usuario findByEmailAndSenha(String email,String senha);
	public Usuario findById(int id);

}
