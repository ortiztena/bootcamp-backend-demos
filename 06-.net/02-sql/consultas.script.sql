USE LemonMusic 
GO

-- Listar las pistas (tabla Track) con precio mayor o igual a 1€

SELECT Name, UnitPrice 
FROM dbo.Track 
WHERE UnitPrice > 1;

-- Listar las pistas de más de 4 minutos de duración

-- SELECT Name, Milliseconds 
-- FROM dbo.Track 
-- WHERE Milliseconds > 240000;

-- Listar las pistas que tengan entre 2 y 3 minutos de duración

-- SELECT [Name], Milliseconds 
-- FROM dbo.Track 
-- WHERE Milliseconds BETWEEN 120000 AND 18000;

-- Listar las pistas que uno de sus compositores (columna Composer) sea Mercury

-- SELECT [Name], Composer
-- FROM dbo.Track
-- WHERE Composer LIKE '%Mercury%';

-- Calcular la media de duración de las pistas (Track) de la plataforma

-- SELECT AVG(Milliseconds)/60/1000 AS DuracionMediaMin
-- FROM dbo.Track;

-- -- Listar los clientes (tabla Customer) de USA, Canada y Brazil

-- SELECT FirstName, LastName, Country
-- FROM dbo.Customer C
-- Where C.Country IN ('USA', 'Canada' , 'Brazil');


-- Listar todas las pistas del artista 'Queen' (Artist.Name = 'Queen')

-- SELECT A.Name, AL.Title, T.Name
-- FROM dbo.Artist A
-- INNER JOIN dbo.Album AL
--     ON A.ArtistId = AL.ArtistId
-- INNER JOIN dbo.Track as T
--     ON AL.AlbumId = T.AlbumId
-- WHERE A.Name = 'Queen'

-- Listar las pistas del artista 'Queen' en las que haya participado como compositor David Bowie

-- SELECT Composer, Name
-- FROM dbo.Track A
-- WHERE Composer LIKE 'Queen%Bowie' 

-- Listar las pistas de la playlist 'Heavy Metal Classic'

-- SELECT  P.[Name] AS Playlist, T.[Name]
-- FROM dbo.Playlist P
-- INNER JOIN dbo.PlaylistTrack PT
--     ON P.[Name] = 'Heavy Metal Classic'
-- INNER JOIN dbo.Track T
--     ON T.TrackId = PT.TrackId


-- Listar las playlist junto con el número de pistas que contienen

-- SELECT P.Name,COUNT(PT.TrackId)
-- FROM dbo.Playlist P
-- LEFT JOIN dbo.PlaylistTrack PT 
--     ON P.PlaylistId = PT.PlaylistId
-- INNER JOIN dbo.Track T 
--     ON P.PlaylistId = T.TrackId
-- GROUP BY P.[Name]


-- Listar las playlist (sin repetir ninguna) que tienen alguna canción de AC/DC

-- SELECT P.Name, COUNT(T.TrackId)
-- FROM dbo.Playlist P
-- INNER JOIN dbo.PlaylistTrack PT 
--     ON P.PlaylistId = PT.PlaylistId
-- INNER JOIN dbo.Track T 
--     ON P.PlaylistId = T.TrackId
-- WHERE T.Composer = 'AC/DC'
-- GROUP BY P.Name

-- Listar las playlist que tienen alguna canción del artista Queen, junto con la cantidad que tienen


-- SELECT P.Name AS Playlist, COUNT(T.TrackId) AS QueenTracks
-- FROM dbo.Playlist P
-- INNER JOIN dbo.PlaylistTrack PT 
--     ON P.PlaylistId = PT.PlaylistId
-- INNER JOIN dbo.Track T
--     ON T.TrackId = PT.TrackId
-- WHERE T.Composer LIKE '%Queen%'
-- GROUP BY P.Name

-- Listar las pistas que no están en ninguna playlist  

-- ******* El PlaylistId no acepta valores null, asi que no encuentra nada

-- SELECT *
-- FROM dbo.Track T
-- LEFT JOIN dbo.PlaylistTrack P 
-- ON T.TrackId = P.TrackId
-- WHERE P.PlaylistId IS NULL


-- Listar los artistas que no tienen album

-- SELECT A.Name, COUNT(AL.AlbumId) AS Albums
-- FROM dbo.Artist A
-- LEFT JOIN dbo.Album AL
--     ON A.ArtistId = AL.ArtistId
-- GROUP BY A.Name
-- HAVING COUNT(AL.AlbumId) < 1 




-- Listar los artistas con el número de albums que tienen


-- SELECT A.Name, COUNT(AL.AlbumId) AS Albums
-- FROM dbo.Artist A
-- INNER JOIN dbo.Album AL
--     ON A.ArtistId = AL.ArtistId
-- GROUP BY A.Name


-- Para saber si está bien, asegurate que algunos de los artistas de la query anterior (artistas sin album) aparecen en este listado con 0 albums

-- SELECT A.Name, COUNT(AL.AlbumId) AS Albums
-- FROM dbo.Artist A
-- LEFT JOIN dbo.Album AL
--     ON A.ArtistId = AL.ArtistId
-- GROUP BY A.Name
