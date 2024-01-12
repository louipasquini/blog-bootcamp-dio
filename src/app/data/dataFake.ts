type Noticia = {
    id:string
    tag:string
    imagem:string
    titulo:string
    autor:string
    paragrafo:string
}

export const dataFake:Noticia[] = [
    {
        "id":'1',
        "tag": 'Literatura',
        "imagem": "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "titulo": "O título da sua notícia estará escrito aqui",
        "autor": "Nome do Autor",
        "paragrafo": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit ipsum et felis blandit, in mollis eros pulvinar. In interdum justo porttitor justo congue, eget aliquam tellus semper. Donec volutpat erat eget imperdiet posuere. Sed ac eros pulvinar, interdum lorem quis, feugiat nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean at egestas metus. Aenean mattis in tortor sed pulvinar. Maecenas ultricies mattis justo, vitae commodo est pharetra id. Nullam mattis fringilla ante non dapibus. Vivamus nisl elit, aliquet in tincidunt ut, tincidunt ut magna.
    
        Vivamus lacinia risus id efficitur ornare. Phasellus auctor erat urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra elit sed enim blandit ornare. Phasellus et nibh rhoncus, lobortis leo eu, dictum lorem. Donec lectus dui, vestibulum ac pulvinar et, malesuada non sem. Pellentesque lobortis dictum mi, eget elementum purus efficitur eu. Ut luctus elit lectus, id semper libero ultrices et.
        
        Vivamus elementum urna in hendrerit varius. Aliquam dignissim lorem vel nisi euismod, non bibendum mi placerat. Maecenas rhoncus diam sed enim bibendum commodo. Morbi eget massa sed sem imperdiet interdum eget vel justo. Aenean velit lacus, fermentum ut feugiat ut, fermentum eget quam. Fusce faucibus est eu est vestibulum ultricies. Etiam ac orci vitae metus tempus sodales. Integer condimentum velit orci, eget posuere justo dictum sit amet. Aenean placerat, nisl non fermentum tempor, elit arcu volutpat diam, ut egestas nulla est vitae risus. Etiam semper scelerisque sagittis. Fusce velit justo, vehicula et purus ut, pharetra commodo metus. Suspendisse malesuada eu metus vel convallis. Nulla in metus id nunc varius sagittis. Nunc sed eleifend quam. Etiam congue mauris vel magna maximus convallis. Fusce sed maximus nibh.
        
        Curabitur iaculis, ex nec tincidunt vestibulum, massa purus sagittis felis, nec mollis purus elit in nulla. Quisque molestie vulputate nisi, eget porta augue fringilla at. Nulla facilisi. Mauris tristique feugiat vehicula. Sed condimentum lectus in elit volutpat, in cursus orci faucibus. Vivamus et consequat ligula, id aliquet velit. Mauris varius, urna ac facilisis commodo, tellus nibh euismod elit, nec venenatis velit velit nec ligula. Aenean est nulla, vulputate a varius eget, posuere quis sem. Mauris quis ultrices diam, at laoreet mi. Morbi id velit venenatis augue tincidunt feugiat.
        
        Etiam bibendum arcu viverra ipsum faucibus ultrices. Aliquam justo magna, semper vitae enim in, scelerisque varius erat. Nulla nisi nisl, volutpat non mauris finibus, cursus convallis justo. Aliquam a pulvinar neque. Aenean tincidunt leo turpis, at viverra enim tincidunt ac. Pellentesque vel egestas odio, non eleifend est. Donec tristique libero lorem, quis mattis neque accumsan sed. Nullam egestas urna non neque interdum lacinia. Praesent semper elit id nulla hendrerit suscipit vitae vel arcu. Morbi laoreet vulputate facilisis. Cras volutpat dignissim ante vel sagittis. Cras pellentesque suscipit quam sit amet ullamcorper. Proin lobortis in erat ut volutpat.`
    },
    {
        "id":'2',
        "tag": 'Literatura',
        "imagem": "https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "titulo": "Esse é o título da próxima notícia do site.",
        "autor": "Nome do Autor",
        "paragrafo": `Vivamus lacinia risus id efficitur ornare. Phasellus auctor erat urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra elit sed enim blandit ornare. Phasellus et nibh rhoncus, lobortis leo eu, dictum lorem. Donec lectus dui, vestibulum ac pulvinar et, malesuada non sem. Pellentesque lobortis dictum mi, eget elementum purus efficitur eu. Ut luctus elit lectus, id semper libero ultrices et.
        
        Vivamus elementum urna in hendrerit varius. Aliquam dignissim lorem vel nisi euismod, non bibendum mi placerat. Maecenas rhoncus diam sed enim bibendum commodo. Morbi eget massa sed sem imperdiet interdum eget vel justo. Aenean velit lacus, fermentum ut feugiat ut, fermentum eget quam. Fusce faucibus est eu est vestibulum ultricies. Etiam ac orci vitae metus tempus sodales. Integer condimentum velit orci, eget posuere justo dictum sit amet. Aenean placerat, nisl non fermentum tempor, elit arcu volutpat diam, ut egestas nulla est vitae risus. Etiam semper scelerisque sagittis. Fusce velit justo, vehicula et purus ut, pharetra commodo metus. Suspendisse malesuada eu metus vel convallis. Nulla in metus id nunc varius sagittis. Nunc sed eleifend quam. Etiam congue mauris vel magna maximus convallis. Fusce sed maximus nibh.
        
        Curabitur iaculis, ex nec tincidunt vestibulum, massa purus sagittis felis, nec mollis purus elit in nulla. Quisque molestie vulputate nisi, eget porta augue fringilla at. Nulla facilisi. Mauris tristique feugiat vehicula. Sed condimentum lectus in elit volutpat, in cursus orci faucibus. Vivamus et consequat ligula, id aliquet velit. Mauris varius, urna ac facilisis commodo, tellus nibh euismod elit, nec venenatis velit velit nec ligula. Aenean est nulla, vulputate a varius eget, posuere quis sem. Mauris quis ultrices diam, at laoreet mi. Morbi id velit venenatis augue tincidunt feugiat.
        
        Etiam bibendum arcu viverra ipsum faucibus ultrices. Aliquam justo magna, semper vitae enim in, scelerisque varius erat. Nulla nisi nisl, volutpat non mauris finibus, cursus convallis justo. Aliquam a pulvinar neque. Aenean tincidunt leo turpis, at viverra enim tincidunt ac. Pellentesque vel egestas odio, non eleifend est. Donec tristique libero lorem, quis mattis neque accumsan sed. Nullam egestas urna non neque interdum lacinia. Praesent semper elit id nulla hendrerit suscipit vitae vel arcu. Morbi laoreet vulputate facilisis. Cras volutpat dignissim ante vel sagittis. Cras pellentesque suscipit quam sit amet ullamcorper. Proin lobortis in erat ut volutpat.`
    },
    {
        "id":'3',
        "tag": 'Família',
        "imagem": "https://plus.unsplash.com/premium_photo-1664373232938-b14f67fb39ef?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "titulo": "Um título novo, dessa vez para ver na lista.",
        "autor": "Nome do Autor",
        "paragrafo": `Vivamus elementum urna in hendrerit varius. Aliquam dignissim lorem vel nisi euismod, non bibendum mi placerat. Maecenas rhoncus diam sed enim bibendum commodo. Morbi eget massa sed sem imperdiet interdum eget vel justo. Aenean velit lacus, fermentum ut feugiat ut, fermentum eget quam. Fusce faucibus est eu est vestibulum ultricies. Etiam ac orci vitae metus tempus sodales. Integer condimentum velit orci, eget posuere justo dictum sit amet. Aenean placerat, nisl non fermentum tempor, elit arcu volutpat diam, ut egestas nulla est vitae risus. Etiam semper scelerisque sagittis. Fusce velit justo, vehicula et purus ut, pharetra commodo metus. Suspendisse malesuada eu metus vel convallis. Nulla in metus id nunc varius sagittis. Nunc sed eleifend quam. Etiam congue mauris vel magna maximus convallis. Fusce sed maximus nibh.
        
        Curabitur iaculis, ex nec tincidunt vestibulum, massa purus sagittis felis, nec mollis purus elit in nulla. Quisque molestie vulputate nisi, eget porta augue fringilla at. Nulla facilisi. Mauris tristique feugiat vehicula. Sed condimentum lectus in elit volutpat, in cursus orci faucibus. Vivamus et consequat ligula, id aliquet velit. Mauris varius, urna ac facilisis commodo, tellus nibh euismod elit, nec venenatis velit velit nec ligula. Aenean est nulla, vulputate a varius eget, posuere quis sem. Mauris quis ultrices diam, at laoreet mi. Morbi id velit venenatis augue tincidunt feugiat.
        
        Etiam bibendum arcu viverra ipsum faucibus ultrices. Aliquam justo magna, semper vitae enim in, scelerisque varius erat. Nulla nisi nisl, volutpat non mauris finibus, cursus convallis justo. Aliquam a pulvinar neque. Aenean tincidunt leo turpis, at viverra enim tincidunt ac. Pellentesque vel egestas odio, non eleifend est. Donec tristique libero lorem, quis mattis neque accumsan sed. Nullam egestas urna non neque interdum lacinia. Praesent semper elit id nulla hendrerit suscipit vitae vel arcu. Morbi laoreet vulputate facilisis. Cras volutpat dignissim ante vel sagittis. Cras pellentesque suscipit quam sit amet ullamcorper. Proin lobortis in erat ut volutpat.`
    },{
        "id":'4',
        "tag": 'Cozinha',
        "imagem": "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "titulo": "As melhores receitas para ter um título.",
        "autor": "Nome do Autor",
        "paragrafo": `Curabitur iaculis, ex nec tincidunt vestibulum, massa purus sagittis felis, nec mollis purus elit in nulla. Quisque molestie vulputate nisi, eget porta augue fringilla at. Nulla facilisi. Mauris tristique feugiat vehicula. Sed condimentum lectus in elit volutpat, in cursus orci faucibus. Vivamus et consequat ligula, id aliquet velit. Mauris varius, urna ac facilisis commodo, tellus nibh euismod elit, nec venenatis velit velit nec ligula. Aenean est nulla, vulputate a varius eget, posuere quis sem. Mauris quis ultrices diam, at laoreet mi. Morbi id velit venenatis augue tincidunt feugiat.
        
        Etiam bibendum arcu viverra ipsum faucibus ultrices. Aliquam justo magna, semper vitae enim in, scelerisque varius erat. Nulla nisi nisl, volutpat non mauris finibus, cursus convallis justo. Aliquam a pulvinar neque. Aenean tincidunt leo turpis, at viverra enim tincidunt ac. Pellentesque vel egestas odio, non eleifend est. Donec tristique libero lorem, quis mattis neque accumsan sed. Nullam egestas urna non neque interdum lacinia. Praesent semper elit id nulla hendrerit suscipit vitae vel arcu. Morbi laoreet vulputate facilisis. Cras volutpat dignissim ante vel sagittis. Cras pellentesque suscipit quam sit amet ullamcorper. Proin lobortis in erat ut volutpat.`
    }
]