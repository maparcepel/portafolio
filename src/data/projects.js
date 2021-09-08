const url = '/assets/projects/icon_url.png';
const github = '/assets/projects/icon_github.png'
const postman = '/assets/projects/icon_postman.png'

export const projects = [{
        'title': 'API App Delivery',
        'description': 'Api desarrollada con PHP, Laravel y Passport para realizar pedidos y recuperarlos con el detalle de productos incluidos. Listar productos filtrados por tipo, categoría o subcategoría o buscarlos a partir de un texto. Obtener el listado de categorías y subcategorías. Historial de pedidos. Además de registro y login de usuarios.',
        'image': "/assets/projects/delivery.jpg",
        'links': [{
                'icon': github,
                'url': 'https://github.com/maparcepel/API-app-delivery'
            },
            {
                'icon': postman,
                'url': 'https://documenter.getpostman.com/view/10581396/TzmCiDxs'
            }
        ]
    },
    {
        'title': 'Binary Sunset',
        'description': 'Web desarrollada con React, Bootstrap y Sass para la renovación de la imagen del estudio de grabación Binary Sunset.',
        'image': "/assets/projects/binary_sunset.jpg",
        'links': [{
                'icon': url,
                'url': 'https://binarysunsetestudio.com'
            },
            {
                'icon': github,
                'url': 'https://github.com/maparcepel/new-binary-sunset'
            }
        ]
    },
    {
        'title': 'Low Blows',
        'description': 'Web desarrollada con Html, CSS, Bootstrap para el grupo post punk Low Blows.',
        'image': "/assets/projects/blows.jpg",
        'links': [{
                'icon': url,
                'url': 'http://blows.tk/'
            },
            {
                'icon': github,
                'url': 'https://github.com/maparcepel/Low_Blows'
            }
        ]
    },
    {
        'title': 'API Keymanager',
        'description': 'Desarrollo de la API REST (PHP, Laravel, JWT) de esta web que facilita la gestión de códigos de seguridad de centrales receptoras de alarmas. La API gestiona la información de usuarios, clientes, ubicaciones y empleados. Más de 30 endpoints para responder a todo tipo de peticiones.',
        'image': "/assets/projects/keymanager.jpg",
        'links': [{
                'icon': url,
                'url': 'https://keymanager.tk/'
            },
            {
                'icon': github,
                'url': 'https://github.com/maparcepel/KeyManager-API'
            },
            {
                'icon': postman,
                'url': 'https://documenter.getpostman.com/view/10581396/TVsxCSKs'
            }
        ]
    },

    {
        'title': 'Sinergia',
        'description': 'Web desarrollada con Wordpress y Divi para esta asociación de empresas del sector tecnológico de Cataluña.',
        'image': "/assets/projects/sinergia.jpg",
        'links': [{
            'icon': url,
            'url': 'https://sinergia.business/'
        }]
    }
];