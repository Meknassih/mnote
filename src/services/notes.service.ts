class NotesService {
    async save(data: any): Promise<string> {
        console.log("window.backendApi", window.backendApi)
        return await window.backendApi.save(data)
    }
}

const notesService = new NotesService();

export default notesService;