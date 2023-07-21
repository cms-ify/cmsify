import cmsifyFrontend from 'cmsify-frontend'
import { cmsifyPrefix, $fetch } from 'cmsify-utils'

const cmsify = async ({ path, isPool = false, poolQueryParams = [] }) => {
    // https://stackoverflow.com/questions/4500741/suppress-chrome-failed-to-load-resource-messages-in-console/75848002#75848002
    let isCMS = (await $fetch({}, `${cmsifyPrefix}/unique-cms-endpoint-for-conditional-cms-rendering-check`)).ok
    cmsifyFrontend(isCMS)
}

export default cmsify