module.exports = {
    names:       ["mute"],
    permissions: ["ADMINISTRATOR"],
    description: "Mutes the current channel.",
    async execute(client, msg, args) {
        const channel = msg.member.voice.channel;
        msg.delete();
        if (channel == null) return;
        
        channel.members.array().forEach(async (member) => {
            await member.fetch();
            await member.voice.setMute(true);
        });
    }
}