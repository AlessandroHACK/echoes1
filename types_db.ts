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
          id_carrito: number
          id_usuario: number | null
          total: number | null
        }
        Insert: {
          id_carrito?: number
          id_usuario?: number | null
          total?: number | null
        }
        Update: {
          id_carrito?: number
          id_usuario?: number | null
          total?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "carrito_id_usuario_fkey"
            columns: ["id_usuario"]
            referencedRelation: "usuarios"
            referencedColumns: ["id_usuario"]
          }
        ]
      }
      marcas: {
        Row: {
          id_marca: number
          logo_path: string | null
          nombre: string | null
        }
        Insert: {
          id_marca?: number
          logo_path?: string | null
          nombre?: string | null
        }
        Update: {
          id_marca?: number
          logo_path?: string | null
          nombre?: string | null
        }
        Relationships: []
      }
      producto_carrito: {
        Row: {
          cantidad: number | null
          id_carrito: number
          id_producto: number
          precio: number | null
          subtotal: number | null
        }
        Insert: {
          cantidad?: number | null
          id_carrito: number
          id_producto?: number
          precio?: number | null
          subtotal?: number | null
        }
        Update: {
          cantidad?: number | null
          id_carrito?: number
          id_producto?: number
          precio?: number | null
          subtotal?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "producto_carrito_id_carrito_fkey"
            columns: ["id_carrito"]
            referencedRelation: "carrito"
            referencedColumns: ["id_carrito"]
          },
          {
            foreignKeyName: "producto_carrito_id_producto_fkey"
            columns: ["id_producto"]
            referencedRelation: "productos"
            referencedColumns: ["id_producto"]
          }
        ]
      }
      productos: {
        Row: {
          cantidad: number | null
          creado_en: string | null
          descripcion: string | null
          id_artista: number | null
          id_marca: number | null
          id_producto: number
          id_tipo: number | null
          imagen_path: string | null
          lanzamiento: string | null
          nombre: string | null
          precio: number | null
          tamano: string | null
        }
        Insert: {
          cantidad?: number | null
          creado_en?: string | null
          descripcion?: string | null
          id_artista?: number | null
          id_marca?: number | null
          id_producto?: number
          id_tipo?: number | null
          imagen_path?: string | null
          lanzamiento?: string | null
          nombre?: string | null
          precio?: number | null
          tamano?: string | null
        }
        Update: {
          cantidad?: number | null
          creado_en?: string | null
          descripcion?: string | null
          id_artista?: number | null
          id_marca?: number | null
          id_producto?: number
          id_tipo?: number | null
          imagen_path?: string | null
          lanzamiento?: string | null
          nombre?: string | null
          precio?: number | null
          tamano?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "productos_id_artista_fkey"
            columns: ["id_artista"]
            referencedRelation: "artistas"
            referencedColumns: ["id_artista"]
          },
          {
            foreignKeyName: "productos_id_marca_fkey"
            columns: ["id_marca"]
            referencedRelation: "marcas"
            referencedColumns: ["id_marca"]
          },
          {
            foreignKeyName: "productos_id_tipo_fkey"
            columns: ["id_tipo"]
            referencedRelation: "tipos"
            referencedColumns: ["id_tipo"]
          }
        ]
      }
      tipos: {
        Row: {
          id_tipo: number
          nombre: string | null
        }
        Insert: {
          id_tipo?: number
          nombre?: string | null
        }
        Update: {
          id_tipo?: number
          nombre?: string | null
        }
        Relationships: []
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
