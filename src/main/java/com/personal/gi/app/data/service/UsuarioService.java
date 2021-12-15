/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.personal.gi.app.data.service;

import com.personal.gi.app.persistencia.usuarios.models.UsuarioModel;
import com.personal.gi.app.persistencia.usuarios.repositorys.UsuarioRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

/**
 *
 * @author edu
 */
@Service
public class UsuarioService {

     private UsuarioRepository repository;
    
    public UsuarioService(@Autowired UsuarioRepository repository) {
        this.repository = repository;
    }

    
    public Optional<UsuarioModel> get(Integer id) {
        return repository.findById(id);
    }

    public UsuarioModel update(UsuarioModel entity) {
        return repository.save(entity);
    }

    public void delete(Integer id) {
        repository.deleteById(id);
    }

    public Page<UsuarioModel> list(Pageable pageable) {
        return repository.findAll(pageable);
    }

    public int count() {
        return (int) repository.count();
    }

}
