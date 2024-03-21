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
import { mount } from 'enzyme'

import Banner from './index'

it('renders correctly', () => {
  const props = {
    type: 'dark',
    icon: '/assets/devops-white.svg',
    rightIcon: '/assets/banner-icon-2.svg',
    name: 'Test',
    desc: 'test',
  }

  const wrapper = mount(<Banner {...props} />)
  expect(wrapper).toIncludeText(props.name)
  expect(wrapper).toIncludeText(props.desc)
  expect(wrapper.find('img')).toHaveLength(2)
})
