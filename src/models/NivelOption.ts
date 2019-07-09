import { IResource } from "../interfaces";

/**
 * Formato padrão para montar um dropdown dos níveis
 */
export class NivelOption {
  constructor(
    /**
     * Valor que será armazenado no dropdown
     */
    readonly value: string,
    /**
     * Texto que será exibido
     */
    readonly text: string,
    /**
     * Armazena a serie, comic ou story
     */
    readonly resource?: IResource,
    /**
     * Endpoint de consulta deste recurso
     */
    readonly endpoint?: string
  ) {}
}
