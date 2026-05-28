insert into news_items (id, title, excerpt, image_url, link_url, created_at)
values (1, 'Alimentation saine', 'Des routines simples pour nourrir le corps et l esprit au quotidien.', '/assets/feerima/news-1.png', '#', now())
on conflict (id) do nothing;

insert into news_items (id, title, excerpt, image_url, link_url, created_at)
values (2, 'Gestion du stress', 'Des exercices brefs pour apaiser les tensions et retrouver le calme.', '/assets/feerima/news-2.png', '#', now())
on conflict (id) do nothing;

insert into news_items (id, title, excerpt, image_url, link_url, created_at)
values (3, 'Sommeil reparateur', 'Des conseils pratiques pour un sommeil profond et durable.', '/assets/feerima/news-3.png', '#', now())
on conflict (id) do nothing;
