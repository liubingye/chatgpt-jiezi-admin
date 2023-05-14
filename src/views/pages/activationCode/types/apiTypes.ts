/**
 * 敏感词分页查询
 */
export interface getChatWord {
  /**
   * 单词
   */
  word?: string
  /**
   * 每页多少条
   */
  pageNum: number
  /**
   * 第几页
   */
  pageSize: number
}
export interface getId {
  /**
   * id
   */
  id?: number
}
export interface getGenCodeModel {
  count: number | null
  numMonths: number | null
}
