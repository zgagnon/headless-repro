import { Combobox, Popover } from '@headlessui/react'
import { Float } from '@headlessui-float/react'
import { useState } from 'react'

const people = [
  'Durward Reynolds',
  'Kenton Towne',
  'Therese Wunsch',
  'Benedict Kessler',
  'Katelyn Rohan',
]
export default function Home() {
  const [selectedPerson, setSelectedPerson] = useState(people[0])
  const [query, setQuery] = useState('')

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase())
        })
  return (
    <div className={'border border-gray-300 w-80'}>
      <Popover>
        <Float>
          <Popover.Button>Open</Popover.Button>
          <Popover.Panel className={'h-80 flex flex-col border border-red-300 bg-gray-200'}>
            Content
            <Combobox value={selectedPerson} onChange={setSelectedPerson}>
              <Float portal>
                <Combobox.Input onChange={(event) => setQuery(event.target.value)} />
                <Combobox.Options>
                  {filteredPeople.map((person) => (
                    <Combobox.Option key={person} value={person}>
                      {person}
                    </Combobox.Option>
                  ))}
                </Combobox.Options>
              </Float>
            </Combobox>
          </Popover.Panel>
        </Float>
      </Popover>
      <div className={'border border-gray-300 w-80'}>Other Element</div>
    </div>
  )
}
