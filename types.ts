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
    artistas: Artist;
}

export interface Turntable {
    id_producto: string;
    nombre: string;
    precio: string;
    imagen_path: string;
    descripcion: string;
    cantidad: string;
    marcas: Brand;
}

export interface Accesory {
    id_producto: string;
    nombre: string;
    precio: string;
    imagen_path: string;
    descripcion: string;
    cantidad: string;
}

export interface Product {
    id_producto: string;
    nombre: string;
    precio: string;
    id_tipo: string;
    imagen_path: string;
    artistas: Artist;
    lanzamiento: Date;
    marcas: Brand;
    tamano: string;
    cantidad: string;
    descripcion: string;
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

export interface Brand{
    id_marca?: string;
    nombre?: string;
    descripcion: string;
    logo_path: string;
    productos: Turntable[];
    turntables?: number;
    stock?: string;
}