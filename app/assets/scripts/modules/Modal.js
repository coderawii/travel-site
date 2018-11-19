import $ from "jquery";

class Modal {
    constructor() {
        this.openModalButton = $(".open-modal");
        this.modal = $(".modal");
        this.closeModalButton = $(".modal__close");

        this.events();
    }

    events() {
        // clicking the open modal button
        this.openModalButton.click(this.openModal.bind(this));

        // clicking the x modal button
        this.closeModalButton.click(this.closeModal.bind(this));

        // pushes any key
        $(document).keyup(this.keyPressHandler.bind(this));

    }

    keyPressHandler(e) {
        if (e.keyCode == 27) {// svaki taster ima svoju vrednost, esc ima vrednost 27
            this.closeModal(); // naravno, ovo this se nece odnositi na nas glavni objekat, tj klasy Modal, vec na element koji je pozbao keyup() metod, naravno, ovo znamo da resimo sa bind()
        }
    }

    openModal() {
        this.modal.addClass("modal--is-visible");
        return false; // bez ovoga, kada se klikne ne get in touch dugme koji ima href="#", brauzer skroluje stranicu skoz do gore, ovo to sprecava, dodje mu kao preventDefault()
    }

    closeModal() {
        this.modal.removeClass("modal--is-visible"); // medjutim, ovde je roblem sto ovo this nece biti this koje se odnosi na ovaj citav objekat, tj necemo moci da pristupimo modal propertyju, to je jer ne pokrecemo ovaj event direktno, vec ga pozivamo preko event clicka gore, dakle kada se u vreme kada se ovaj closeModal metod zapravo pokrene js this keyword ce biti resetovan na element na koji je kliknut, ali gore u events() mozemo da imamo kontrolu na sta se odnosi this, tj mozemo da ga setujemo sa bind(). i u bind stavimo this da to this ostane setovan kao sto vec jeste
    }

    
}

export default Modal;