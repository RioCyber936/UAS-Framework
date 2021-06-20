/* ============
 * Actions for the category module
 * ============
 *
 * The actions that are available on the
 * category module.
 */

import {
  TRANSACTIONs_LIST
} from './action-types';

export function list(payload) {
  return {
    type: TRANSACTIONs_LIST,
    payload
  }
}