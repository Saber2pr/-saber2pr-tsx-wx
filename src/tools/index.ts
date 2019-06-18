/*
 * @Author: saber2pr
 * @Date: 2019-06-18 13:35:08
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-18 13:46:59
 */
import { writeFile, WriteFileOptions } from 'fs'
import { promisify } from 'util'
import { URL } from 'url'
import { TSX } from '../core/tsx'

const saveFile = promisify(writeFile)

export function toFile(
  path: string | number | Buffer | URL,
  data: JSX.Element,
  options?: WriteFileOptions
) {
  return saveFile(path, TSX.toString(data), options)
}
