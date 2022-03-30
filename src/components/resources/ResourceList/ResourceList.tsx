import React from "react";
import { Resource} from 'src/utils/interfaces/interfaces';
import ResourceItem from '../ResourceItem/ResourceItem';

interface IProps {
    resources: Resource[];
}

const resourcesDB = [
        {
            Logo: 'https://i.ytimg.com/vi/LlwN5czsaus/maxresdefault.jpg',
            Link: 'https://hd.kinopoisk.ru/',
            Title: 'Kinopoisk'
        },
        {
            Logo: 'https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png',
            Link: 'https://www.netflix.com/',
            Title: 'Netflix'
        },
        {
            Logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Ivi_android.png',
            Link: 'https://www.ivi.ru/',
            Title: 'Ivi'
        },
        {
            Logo: 'https://www.logo.wine/a/logo/YouTube/YouTube-White-Full-Color-Dark-Background-Logo.wine.svg',
            Link: 'https://www.youtube.com/',
            Title: 'YouTube'
        },
        {
            Logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Megogo_Logo.png',
            Link: 'https://megogo.net/',
            Title: 'Megogo'
        },
        {
            Logo: 'https://www.voka.tv/favicon-512x512.png',
            Link: 'https://voka.tv/',
            Title: 'Voka'
        },
        {
            Logo: 'https://topshowmen.com/laravel-filemanager/tinymce/2/Аме%20копия.jpg',
            Link: 'https://www.amediateka.ru/',
            Title: 'Amediateka'
        },
        {
            Logo: 'https://games.chitai-gorod.ru/img/questions/3/partner/okko.png',
            Link: 'https://okko.tv/',
            Title: 'Okko'
        },
        {
            Logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/START_logo_2021.svg/1280px-START_logo_2021.svg.png',
            Link: 'https://start.ru/',
            Title: 'START'
        },
        {
            Logo: 'https://mf-static-ssl.more.tv/widgetitemdistributor/221/5f6ca4753e2b8.svg',
            Link: 'https://more.tv/',
            Title: 'More.tv'
        }
]

const ResourceList: React.FC<IProps> = (): JSX.Element => {

    return(
        <>
           {
             resourcesDB.length ?
             resourcesDB.map((resource) => {
                 return (                   
                     <ResourceItem
                         key={resource.Title + resource.Link}
                         Title={resource.Title}
                         Logo={resource.Logo} 
                         Link={resource.Link}     
                     />
                 )
             })
             : <div>No Resources</div>
          }
        </>
    )
}

export default ResourceList;