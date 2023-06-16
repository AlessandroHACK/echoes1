export interface UserDetails {
    id_usuario: string;
    nombre: string;
    direccion: string;
    correo?: string;
    usuario_path?: string;

};

export interface Album{
    id_album: string;
    nombre: string;
    precio: string;
    album_path: string;
    lanzamiento: Date;
    tamano: string;
    cantidad: string;
    id_artista: string;
}

export interface Artist{
    id_artista: string;
    nombre: string;
    descripcion: string;
    artista_path: string;
    albums: Album[];
}