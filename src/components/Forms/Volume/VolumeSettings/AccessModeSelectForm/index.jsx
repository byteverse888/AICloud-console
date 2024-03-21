/*
 * This file is part of KubeSphere Console.
 * Copyright (C) 2019 The KubeSphere Console Authors.
 *
 * KubeSphere Console is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KubeSphere Console is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with KubeSphere Console.  If not, see <https://www.gnu.org/licenses/>.
 */

import React from 'react'
import { get } from 'lodash'
import { MODULE_KIND_MAP } from 'utils/constants'
import { Form } from '@kube-design/components'
import { AccessModes } from 'components/Inputs'

const ACCESSMODE_KEY = 'spec.accessModes[0]'
const supportedAccessModes = ['ReadWriteOnce', 'ReadOnlyMany', 'ReadWriteMany']

export default class VolumeSettings extends React.Component {
  get formTemplate() {
    const { formTemplate, module } = this.props
    return get(formTemplate, MODULE_KIND_MAP[module], formTemplate)
  }

  render() {
    const { formRef } = this.props

    return (
      <Form data={this.formTemplate} ref={formRef}>
        <Form.Item label={t('ACCESS_MODE_TCAP')} rules={[{ required: true }]}>
          <AccessModes
            name={ACCESSMODE_KEY}
            defaultValue={get(supportedAccessModes, '[0]', '')}
            supportedAccessModes={supportedAccessModes}
          />
        </Form.Item>
      </Form>
    )
  }
}
