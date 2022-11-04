import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import {repository} from '@loopback/repository';
import {Inmueble} from '../models';
import {InmuebleRepository} from '../repositories';

@injectable({scope: BindingScope.TRANSIENT})
export class InmuebleService {
  constructor(
    //Acceder a la BDs => Repositorios
    @repository(InmuebleRepository)
    public inmuebleRepository: InmuebleRepository
  ) { }

  getImublesDisponibles(): Promise<Inmueble[]> {
    let inmuebles = this.inmuebleRepository.find({
      //Aplico filtros
      where: {
        estado: 'A'
      }
    });
    return inmuebles;
  }

  getInmueblesPorBarrio(ubicacion: string): Promise<Inmueble[]> {
    let inmuebles = this.inmuebleRepository.find({
      //Aplico filtros
      where: {
        barrio: ubicacion,
        estado: 'A'
      }
    });
    return inmuebles;
  }
