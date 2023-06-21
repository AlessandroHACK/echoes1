export interface UserDetails {
    id: string;
    first_name: string;
    last_name: string;
    full_name?: string;
    avatar_url?: string;

};

export interface Album {
    id_producto: string;
    nombre: string;
    precio: string;
    imagen_path: string;
    lanzamiento: Date;
    tamano: string;
    cantidad: string;
    id_artista: string;
}

export interface Turntable {
    id_producto: string;
    nombre: string;
    precio: string;
    imagen_path: string;
    descripcion: string;
    cantidad: string;
    id_marca: string;
}

export interface Product {
    id_producto: string;
    nombre: string;
    precio: string;
    id_tipo: string;
    imagen_path: string;
}

export interface Artist {
    id_artista: string;
    nombre: string;
    descripcion: string;
    artista_path: string;
    productos: Album[];
    albums?: number;
    stock?: string;
}