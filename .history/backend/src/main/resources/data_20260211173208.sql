insert into news_items (id, title, excerpt, image_url, link_url, created_at)
values (1, 'Alimentation saine', 'Des routines simples pour nourrir le corps et l esprit au quotidien.', '', '#', now())
on conflict (id) do nothing;

insert into news_items (id, title, excerpt, image_url, link_url, created_at)
values (2, 'Gestion du stress', 'Des exercices brefs pour apaiser les tensions et retrouver le calme.', '', '#', now())
on conflict (id) do nothing;

insert into news_items (id, title, excerpt, image_url, link_url, created_at)
values (3, 'Sommeil reparateur', 'Des conseils pratiques pour un sommeil profond et durable.', '', '#', now())
on conflict (id) do nothing;
