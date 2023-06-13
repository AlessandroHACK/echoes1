export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      albums: {
        Row: {
          album_path: string | null
          id_album: number
          id_artista: number | null
          lanzamiento: string | null
          nombre: string | null
          precio: number | null
          tamano: string | null
        }
        Insert: {
          album_path?: string | null
          id_album?: number
          id_artista?: number | null
          lanzamiento?: string | null
          nombre?: string | null
          precio?: number | null
          tamano?: string | null
        }
        Update: {
          album_path?: string | null
          id_album?: number
          id_artista?: number | null
          lanzamiento?: string | null
          nombre?: string | null
          precio?: number | null
          tamano?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "albums_id_artista_fkey"
            columns: ["id_artista"]
            referencedRelation: "artistas"
            referencedColumns: ["id_artista"]
          }
        ]
      }
      artistas: {
        Row: {
          artista_path: string | null
          descripcion: string | null
          id_artista: number
          nombre: string | null
        }
        Insert: {
          artista_path?: string | null
          descripcion?: string | null
          id_artista?: number
          nombre?: string | null
        }
        Update: {
          artista_path?: string | null
          descripcion?: string | null
          id_artista?: number
          nombre?: string | null
        }
        Relationships: []
      }
      carrito: {
        Row: {
          cantidad: number | null
          id_album: number
          id_usuario: number
          subtotal: number | null
        }
        Insert: {
          cantidad?: number | null
          id_album?: number
          id_usuario: number
          subtotal?: number | null
        }
        Update: {
          cantidad?: number | null
          id_album?: number
          id_usuario?: number
          subtotal?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "carrito_id_album_fkey"
            columns: ["id_album"]
            referencedRelation: "albums"
            referencedColumns: ["id_album"]
          },
          {
            foreignKeyName: "carrito_id_usuario_fkey"
            columns: ["id_usuario"]
            referencedRelation: "usuarios"
            referencedColumns: ["id_usuario"]
          }
        ]
      }
      usuarios: {
        Row: {
          correo: string | null
          direccion: string | null
          id_usuario: number
          nombre: string | null
          usuario_path: string | null
        }
        Insert: {
          correo?: string | null
          direccion?: string | null
          id_usuario?: number
          nombre?: string | null
          usuario_path?: string | null
        }
        Update: {
          correo?: string | null
          direccion?: string | null
          id_usuario?: number
          nombre?: string | null
          usuario_path?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
