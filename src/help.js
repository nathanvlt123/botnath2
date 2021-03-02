const help = (prefix) => {
	return `> *Comandos De Figurinhas* <
comando : *${prefix}sticker* or *${prefix}stiker*
desc : converte image/gif/video para figurinha
usage : marque image/gif/video, ou mande image/gif/video with caption\n
Comando : *${prefix}sticker nobg* or *${prefix}stiker nobg*
desc : converte imagem para figurinha removendo o background
usage : marque a imagem, ou mande a imagem usando comando\n
Comando : *${prefix}toimg*
desc : converte figurinha em imagem
usage : marque a figurinha usando o comando\n
Comando : *${prefix}tsticker* or *${prefix}tstiker*
desc : converte texto para figurinha
usage : *${prefix}tsticker texto aqui!*\n
> *Comandos De Meme 👍* <
Comando : *${prefix}meme*
desc : um meme aleatório em inglês
usage : só mandar o comando\n
command : *${prefix}memeindo*
desc : um meme aleatório em indonésio
usage : só mandar o comando\n
> *Outros Comandos* <
command : *${prefix}gtts*
desc : converte texto para audio
usage : *${prefix}gtts [cc] [text]*\nexample : *${prefix}gtts ja On2-chan*\n
command : *${prefix}loli*
desc : imagem aleatória de uma 👮lolizinha👮
usage : só mandar o comando\n
command : *${prefix}nsfwloli* (OFF)
desc : imagem aleatória de uma 👮lolizinha nsfw👮
usage : só mandar o comando\n
command : *${prefix}url2img*
desc : tirar screenshots da web
usage : *${prefix}url2img [tipe] [url]*\n
command : *${prefix}simi*
desc : sua mensagem será respondida por simi
usage : *${prefix}simi sua mansagem*\n
command : *${prefix}ocr*
desc : take the text in the picture
usage : reply image, or send image with caption\n
command : *${prefix}wait*
desc : procure anime com imagem (não é tão preciso)
usage : marque a imagem, ou mande a imagem usando comando\n
command : *${prefix}setprefix*
desc : troca prefixo do bot
usage : *${prefix}setprefix [text|optional]*\nexample : *${prefix}setprefix ?*
note : o comando só pode ser usado pelo dono do bot\n
> *Comandos de Grupo* <
command : *${prefix}add*
desc : add um memdro no grupo
usage : *${prefix}add 62813xxxxx*\n
note : só funciona se o bot for adm e quem for usar tambem precisa ser adm!\n
command : *${prefix}kick*
desc : tira membros do grupo
usage : *${prefix}kick @tagmembro*\n
note : só funciona se o bot for adm e quem for usar tambem precisa ser adm!\n
command : *${prefix}promote*
desc : da adm pra membro comum
usage : *${prefix}promote @tagmembro*\n
note : só funciona se o bot for adm e quem for usar tambem precisa ser adm!\n
command : *${prefix}demote*
desc : tira adm dos cara
usage : *${prefix}demote @tagmembro*\n
note : só funciona se o bot for adm e quem for usar tambem precisa ser adm!\n
command : *${prefix}linkgroup*
desc : te da o link do grupo
usage : só mandar o comando
note : can only be used when the bot becomes admin, and the one who sends the command is admin!\n
command : *${prefix}leave*
desc : faz o bot sair do grupo
usage : só mandar o comando
note : só pode ser usado por adm do grupo e proprietário do bot\n
command : *${prefix}tagall*
desc : marca todos os membros do grupo
usage : só mandar o comando
note : este comando pode ser usado se você for um adm do grupo\n
command : *${prefix}simih*
desc : activate simi mode in the group
usage : *${prefix}simih 1* to activate simi mode and *${prefix}simih 0* to deactivate simi mode
note : This command can be used if you are a group admin\n`
}

exports.help = help
