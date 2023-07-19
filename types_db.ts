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
          id_usuario: string
          total: number | null
        }
        Insert: {
          id_usuario: string
          total?: number | null
        }
        Update: {
          id_usuario?: string
          total?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "carrito_id_usuario_fkey"
            columns: ["id_usuario"]
            referencedRelation: "users"
            referencedColumns: ["id"]
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
      productos_carrito: {
        Row: {
          cantidad: number | null
          id_carrito: string
          id_producto: number
          precio_subtotal: number | null
          precio_unitario: number | null
        }
        Insert: {
          cantidad?: number | null
          id_carrito: string
          id_producto: number
          precio_subtotal?: number | null
          precio_unitario?: number | null
        }
        Update: {
          cantidad?: number | null
          id_carrito?: string
          id_producto?: number
          precio_subtotal?: number | null
          precio_unitario?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "productos_carrito_id_carrito_fkey"
            columns: ["id_carrito"]
            referencedRelation: "carrito"
            referencedColumns: ["id_usuario"]
          },
          {
            foreignKeyName: "productos_carrito_id_producto_fkey"
            columns: ["id_producto"]
            referencedRelation: "productos"
            referencedColumns: ["id_producto"]
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
      users: {
        Row: {
          avatar_url: string | null
          billing_address: Json | null
          full_name: string | null
          id: string
          payment_method: Json | null
        }
        Insert: {
          avatar_url?: string | null
          billing_address?: Json | null
          full_name?: string | null
          id: string
          payment_method?: Json | null
        }
        Update: {
          avatar_url?: string | null
          billing_address?: Json | null
          full_name?: string | null
          id?: string
          payment_method?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      search_product: {
        Args: {
          query: string
        }
        Returns: {
          id_producto: number
          nombre: string
          cantidad: number
          precio: number
          id_tipo: number
          imagen_path: string
        }[]
      }
      search_products:
        | {
            Args: {
              search_query: string
            }
            Returns: {
              id_producto: number
              nombre: string
              precio: number
              id_tipo: number
              imagen_path: string
            }[]
          }
        | {
            Args: {
              search_query: string
            }
            Returns: {
              id_producto: number
              nombre: string
              precio: number
              id_tipo: number
              imagen_path: string
            }[]
          }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
