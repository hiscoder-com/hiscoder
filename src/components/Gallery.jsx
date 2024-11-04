import { useEffect, useState } from 'react'

import projects from '../../data/projects.json'
import Filter from './Filter'
import Projects from './Projects'

function Gallery() {
  const [selectedFilters, setSelectedFilters] = useState([])
  const [filteredItems, setFilteredItems] = useState(projects)

  const handleFilterClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory)
      setSelectedFilters(filters)
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory])
    }
  }

  useEffect(() => {
    filterItems()
  }, [selectedFilters])

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      const tempProjects = projects.filter((project) =>
        project.categories.some((category) => selectedFilters.includes(category))
      )
      setFilteredItems(tempProjects)
    } else {
      setFilteredItems([...projects])
    }
  }

  return (
    <>
      <Filter handleFilterClick={handleFilterClick} />
      <Projects filteredItems={filteredItems} location={'gallery'} />
    </>
  )
}

export default Gallery
